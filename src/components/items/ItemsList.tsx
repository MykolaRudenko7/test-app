import { Button, List, ListItem, ListItemText } from '@mui/material'
import { ItemListProps } from '../../types'

export const ItemList = ({ items, onEditItem }: ItemListProps) => (
  <List>
    {items.map((item) => (
      <ListItem
        key={item.id}
        secondaryAction={<Button onClick={() => onEditItem(item)}>Edit</Button>}
      >
        <ListItemText primary={item.name} />
      </ListItem>
    ))}
  </List>
)
