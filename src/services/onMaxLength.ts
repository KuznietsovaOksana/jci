export const onMaxLength = (index: number) => {
  if (index === 0 || index === 2) return '100';
  if (index === 3) return '50';
  if (index === 5) return '150';
  if (index === 6) return '200';
};
