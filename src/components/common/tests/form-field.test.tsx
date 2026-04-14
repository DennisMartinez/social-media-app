import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { FormField } from '../form-field'

describe('FormField', () => {
  it('renders label and required indicator', async () => {
    const screen = await render(
      <FormField label="Username" required>
        <input />
      </FormField>
    )

    const label = screen.getByText('Username')
    const required = screen.getByText('*')

    await expect.element(label).toBeInTheDocument()
    await expect.element(required).toBeInTheDocument()
  })

  it('associates label htmlFor with input id', async () => {
    const screen = await render(
      <FormField label="Email">
        <input />
      </FormField>
    )

    const label = screen.getByText('Email')
    const input = screen.getByRole('textbox', { name: 'Email' })
    const htmlFor = label.element().getAttribute('for')
    const id = input.element().getAttribute('id')

    expect(htmlFor).toBe(id)
  })

  it('passes required prop to child element', async () => {
    const screen = await render(
      <FormField label="Password" required>
        <input />
      </FormField>
    )

    const input = screen.getByRole('textbox')

    await expect.element(input).toHaveAttribute('required')
  })

  it('renders function-as-children with id and required', async () => {
    const screen = await render(
      <FormField label="Email" required>
        {({ id, required }) => (
          <input data-testid="email-input" id={id} required={required} />
        )}
      </FormField>
    )

    const input = screen.getByTestId('email-input')

    await expect.element(input).toBeInTheDocument()
    await expect.element(input).toHaveAttribute('required')
    await expect.element(input).toHaveAttribute('data-testid', 'email-input')
  })

  it('renders error message with role="alert"', async () => {
    const screen = await render(
      <FormField label="Username" error="Username is required">
        <input />
      </FormField>
    )

    const error = screen.getByRole('alert')

    await expect.element(error).toBeInTheDocument()
    await expect.element(error).toHaveTextContent('Username is required')
  })
})
