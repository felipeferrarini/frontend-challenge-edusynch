export const getIndexByPercentage = (array: any[], percentage: number) => {
  const total = array.length;
  const index = Math.floor(total * percentage);

  return index;
};
