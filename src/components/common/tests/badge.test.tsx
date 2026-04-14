import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Badge } from '../badge'

describe('Badge', () => {
  it('renders children', async () => {
    const screen = await render(<Badge>Test Badge</Badge>)
    const badge = expect.element(screen.getByText('Test Badge'))

    await badge.toBeInTheDocument()
  })

  it('applies default variant and size', async () => {
    const screen = await render(<Badge>Default Badge</Badge>)
    const badge = expect.element(screen.getByText('Default Badge'))

    await badge.toHaveClass('bg-blue-100 px-2')
  })

  it('applies custom className with additional styles', async () => {
    const screen = await render(
      <Badge className="custom-class">Custom Badge</Badge>
    )
    const badge = expect.element(screen.getByText('Custom Badge'))

    await badge.toHaveClass('custom-class')
  })

  it('overrides tailwind classes with custom className', async () => {
    const screen = await render(
      <Badge className="bg-red-500 text-white">Overridden Badge</Badge>
    )
    const badge = expect.element(screen.getByText('Overridden Badge'))

    await badge.toHaveClass('bg-red-500 text-white')
    await badge.not.toHaveClass('bg-blue-100 text-blue-700')
  })
})
