import { Item } from '../types'

export const getLocalStorageItems = () => {
  return Object.keys(localStorage)
    .filter((key) => key.startsWith('item-'))
    .map((key) => JSON.parse(localStorage.getItem(key) || '{}'))
}

export const mergeItems = (items: Item[], localStorageItems: Item[]) => {
  return [...items, ...localStorageItems.filter((item) => !items.some((i) => i.id === item.id))]
}
