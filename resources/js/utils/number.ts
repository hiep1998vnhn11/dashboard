export const formatDecimal = (value: number, decimal: number = 2) => {
  return value.toFixed(decimal)
}
export function formatMoney(value: any) {
  value = +value + ''
  value = value.replace(/.,/g, '')
  let result = ''
  const length = value.length
  for (let i = length - 1; i >= 0; i--) {
    result = value[i] + result
    if ((length - i) % 3 === 0 && i !== 0) {
      result = ',' + result
    }
  }
  return result
}
