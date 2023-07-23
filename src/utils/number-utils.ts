export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
};

export const numberWithinRange = (
  number: number,
  min: number,
  max: number
): number => Math.min(Math.max(number, min), max);
