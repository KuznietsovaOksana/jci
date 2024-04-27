export function compareDates(
  a: { start_date: string },
  b: { start_date: string }
): number {
  return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
}
