import { Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/slices/userSlice'
import { LoginForm } from '../components/auth/LoginForm'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = () => {
    dispatch(login())
    navigate('/items')
  }

  return (
    <div style={{ margin: '20px' }}>
      <Typography style={{ marginBottom: '20px' }} variant="h3">
        Login
      </Typography>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  )
}

export default LoginPage
