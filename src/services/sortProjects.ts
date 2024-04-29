export function compareNumbers(
  a: { order_number: number },
  b: { order_number: number }
): number {
  return a.order_number - b.order_number;
}
