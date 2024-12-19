import { useEffect, useState } from 'react'
import { Typography, Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../store'
import { addItem, updateItem } from '../store/slices/itemsSlice'
import { LoadingSpinner } from '../components/common/LoadingSpinner'
import { ErrorMessage } from '../components/common/ErrorMessage'
import { ItemList } from '../components/items/ItemsList'
import { ItemFormDialog } from '../components/items/ItemFormDialog'
import { fetchItems } from '../store/thunks/itemsThunks'
import LogoutButton from '../components/auth/LogoutButton'

const ItemsPage = () => {
  const items = useAppSelector((state) => state.items.items)
  const loading = useAppSelector((state) => state.items.loading)
  const error = useAppSelector((state) => state.items.error)
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<{ id: number; name: string } | null>(null)

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

  const handleSubmit = (values: { name: string }) => {
    if (editingItem) {
      dispatch(updateItem({ id: editingItem.id, name: values.name }))
    } else {
      dispatch(addItem({ id: Date.now(), name: values.name }))
    }
    setOpen(false)
    setEditingItem(null)
  }

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <div style={{ margin: '20px' }}>
      <Typography variant="h4">Items</Typography>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Item
      </Button>

      <LogoutButton />

      <ItemList
        items={items}
        onEditItem={(item) => {
          setEditingItem(item)
          setOpen(true)
        }}
      />

      <ItemFormDialog
        open={open}
        onClose={() => {
          setOpen(false)
          setEditingItem(null)
        }}
        onSubmit={handleSubmit}
        editingItem={editingItem}
      />
    </div>
  )
}

export default ItemsPage
