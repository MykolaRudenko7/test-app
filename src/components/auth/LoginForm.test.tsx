import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import { LoginForm } from './LoginForm.tsx'

describe('LoginForm', () => {
  it('should not submit form if email is invalid', () => {
    const onSubmitMock = vi.fn()
    render(<LoginForm onSubmit={onSubmitMock} />)

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'invalid-email' },
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    })

    fireEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(onSubmitMock).not.toHaveBeenCalled()
  })

  it('should display error message for invalid email', async () => {
    render(<LoginForm onSubmit={() => {}} />)

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'invalid-email' },
    })

    fireEvent.blur(screen.getByLabelText(/email/i))

    await waitFor(() => {
      const errorMessage = screen.getByText(/invalid email address/i)
      expect(errorMessage).toBeInTheDocument()
    })
  })
})
