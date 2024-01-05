export function formatCurrency(value: number) {
  const numberFormat = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

  const received = numberFormat.format(value)

  return received;
}
