import { setLoading, setItems, setError } from '../slices/itemsSlice'
import itemsData from '../../data/items.json'
import { AppDispatch } from '..'
import { getLocalStorageItems, mergeItems } from '../../utils'

export const fetchItems = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true))
  try {
    const items = itemsData.map((item) => {
      const editedItem = localStorage.getItem(`item-${item.id}`)
      return editedItem ? JSON.parse(editedItem) : item
    })

    const localStorageItems = getLocalStorageItems()

    const allItems = mergeItems(items, localStorageItems)

    dispatch(setItems(allItems))
  } catch (error) {
    dispatch(setError(error instanceof Error ? error.message : String(error)))
  } finally {
    dispatch(setLoading(false))
  }
}
