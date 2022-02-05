import dayjs from 'dayjs'

export const formatDate = (value) => {
  return dayjs(value).format('MMMM DD, YYYY')
}