import { Category } from '../features/category/categorySlice'

export const formatDateString = (dateString: string) => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }

  return date.toLocaleString('en-US', options)
}

export const getFirstBookCategoryName = (
  bookCategories: string[],
  availableCategories: Category[]
) => {
  const firstCategory = availableCategories.filter(
    (category: Category) => bookCategories[0] === category.id
  )[0]
  return firstCategory ? firstCategory.name : 'Uncategorized'
}
