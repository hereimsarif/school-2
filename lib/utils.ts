export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString(undefined, { dateStyle: 'medium' });
}
