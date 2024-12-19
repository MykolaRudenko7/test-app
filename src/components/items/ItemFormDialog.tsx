import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ItemFormDialogProps } from '../../types'

export const ItemFormDialog = ({ open, onClose, onSubmit, editingItem }: ItemFormDialogProps) => {
  const formik = useFormik({
    initialValues: {
      name: editingItem?.name || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      onSubmit(values)
      formik.resetForm()
    },
  })

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{editingItem ? 'Edit Item' : 'Add Item'}</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            style={{ marginBottom: '10px' }}
          />
          <Button type="submit" variant="contained" color="primary">
            {editingItem ? 'Update' : 'Add'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
