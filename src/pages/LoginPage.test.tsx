import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { createStore } from 'redux'
import LoginPage from './LoginPage'

const mockStore = createStore(() => ({}))

describe('LoginPage', () => {
  it('should render the login form', () => {
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>,
    )

    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument()

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })
})
