export const onDateMask = (date: string) => {
  const numericValue = date.replace(/\D/g, '');

  const formatDateString = (value: string): string => {
    if (value.length <= 2) {
      return value;
    } else if (value.length <= 4) {
      return value.slice(0, 2) + '.' + value.slice(2);
    } else {
      return (
        value.slice(0, 2) + '.' + value.slice(2, 4) + '.' + value.slice(4, 8)
      );
    }
  };

  return formatDateString(numericValue).slice(0, 10);
};
