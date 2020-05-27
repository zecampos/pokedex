export function sumArray(arr: Array<any>) {
  const result = arr.reduce((a, { base_stat }) => a + base_stat, 0);
  return result;
}
