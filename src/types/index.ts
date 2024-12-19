export interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void
}

export interface ErrorMessageProps {
  message: string
}

export interface ItemFormDialogProps {
  open: boolean
  onClose: () => void
  onSubmit: (values: { name: string }) => void
  editingItem?: { id: number; name: string } | null
}

export interface ItemListProps {
  items: Array<{ id: number; name: string }>
  onEditItem: (item: { id: number; name: string }) => void
}

export interface Item {
  id: number
  name: string
}

export interface ItemsState {
  items: Item[]
  loading: boolean
  error: string | null
}

export interface UserState {
  isLoggedIn: boolean
}
