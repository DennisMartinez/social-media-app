import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Badge } from '../badge'

describe('Badge', () => {
  it('renders children', async () => {
    const screen = await render(<Badge>Test Badge</Badge>)
    const badge = screen.getByText('Test Badge')

    await expect.element(badge).toBeInTheDocument()
  })

  it('applies default variant and size', async () => {
    const screen = await render(<Badge>Default Badge</Badge>)
    const badge = screen.getByText('Default Badge')

    await expect.element(badge).toHaveClass('bg-blue-100 px-2')
  })

  it('applies custom className with additional styles', async () => {
    const screen = await render(
      <Badge className="custom-class">Custom Badge</Badge>
    )
    const badge = screen.getByText('Custom Badge')

    await expect.element(badge).toHaveClass('custom-class')
  })

  it('overrides tailwind classes with custom className', async () => {
    const screen = await render(
      <Badge className="bg-red-500 text-white">Overridden Badge</Badge>
    )
    const badge = screen.getByText('Overridden Badge')

    await expect.element(badge).toHaveClass('bg-red-500 text-white')
    await expect.element(badge).not.toHaveClass('bg-blue-100 text-blue-700')
  })
})
