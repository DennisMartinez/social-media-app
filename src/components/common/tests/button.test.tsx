import { describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { Button } from '../button'

describe('Button ', () => {
  it('renders children', async () => {
    const screen = await render(<Button>Test Button</Button>)
    const button = expect.element(screen.getByText('Test Button'))

    await button.toBeInTheDocument()
  })

  it('applies default variant and size', async () => {
    const screen = await render(
      <Button variant="secondary" size="xs">
        Default Button
      </Button>
    )
    const button = expect.element(screen.getByText('Default Button'))

    await button.toHaveClass('bg-gray-500 text-white px-2 py-1')
  })

  it('applies custom className with additional styles', async () => {
    const screen = await render(
      <Button className="custom-class">Custom Button</Button>
    )
    const button = expect.element(screen.getByText('Custom Button'))

    await button.toHaveClass('custom-class')
  })

  it('overrides tailwind classes with custom className', async () => {
    const screen = await render(
      <Button className="bg-red-500 text-white">Overridden Button</Button>
    )
    const button = expect.element(screen.getByText('Overridden Button'))

    await button.toHaveClass('bg-red-500 text-white')
    await button.not.toHaveClass('bg-blue-500 text-white')
  })

  it('renders as a polymorphic component when `as` is provided', async () => {
    const screen = await render(
      <Button as="a" href="https://example.com">
        Link Button
      </Button>
    )
    const link = screen.getByRole('link', { name: 'Link Button' })

    await expect.element(link).toHaveAttribute('href', 'https://example.com')
  })

  it('disables the button and displays a loading icon when `loading` is true', async () => {
    const screen = await render(<Button loading>Loading Button</Button>)
    const button = screen.getByText('Loading Button')
    const spinner = button.getByTestId('button-loader')

    await expect.element(button).toBeDisabled()
    await expect.element(spinner).toBeInTheDocument()
  })

  it('disables the button and displays a loading icon when `loading` is true as a polymorphic component', async () => {
    const screen = await render(
      <Button loading as="a" href="https://example.com">
        Loading Button
      </Button>
    )
    const link = screen.getByText('Loading Button')
    const spinner = link.getByTestId('button-loader')

    await expect.element(link).toBeDisabled()
    await expect.element(spinner).toBeInTheDocument()
  })

  it("disables the button and doesn't let the user click", async () => {
    const clickable = vi.fn()
    const screen = await render(<Button disabled>Disabled Link Button</Button>)
    const button = screen.getByRole('button', { name: 'Disabled Link Button' })

    await expect.element(button).toBeDisabled()
    await expect.element(button).toHaveAttribute('tabindex', '-1')

    await button.click({ force: true })
    expect(clickable).not.toHaveBeenCalled()
  })

  it("disables the button if the component is a link and disabled is true and doesn't let the user click", async () => {
    const clickable = vi.fn()
    const screen = await render(
      <Button as="a" href="https://example.com" disabled>
        Disabled Link Button
      </Button>
    )
    const link = screen.getByRole('link', { name: 'Disabled Link Button' })

    await expect.element(link).toBeDisabled()
    await expect.element(link).toHaveAttribute('tabindex', '-1')

    await link.click({ force: true })
    expect(clickable).not.toHaveBeenCalled()
  })
})
