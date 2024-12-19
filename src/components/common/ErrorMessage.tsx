import { Typography } from '@mui/material'
import { ErrorMessageProps } from '../../types'

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <Typography variant="h6" color="error">
    Error: {message}
  </Typography>
)
