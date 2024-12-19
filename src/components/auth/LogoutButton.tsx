import { Button } from '@mui/material'
import { useAppDispatch } from '../../store'
import { itemsSlice } from '../../store/slices/itemsSlice'
import { userSlice } from '../../store/slices/userSlice'

const LogoutButton = () => {
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(userSlice.actions.logout())
    dispatch(itemsSlice.actions.clearItems())
  }

  return (
    <Button
      onClick={handleLogout}
      type="submit"
      variant="contained"
      color="primary"
      style={{ marginLeft: '20px' }}
    >
      Log Out
    </Button>
  )
}

export default LogoutButton
