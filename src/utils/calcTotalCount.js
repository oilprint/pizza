export const calcTotalCount = (items) => {
  return items.reduce((sum, obj) => {
        return obj.count + sum
      }, 0)
}