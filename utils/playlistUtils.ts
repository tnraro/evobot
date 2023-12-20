export const reduceDescriptions = (descriptions: string[], n: number) => {
  let sum = 0;
  let max = 0;
  const arr: { index: number, length: number }[] = [];
  descriptions.forEach((s, index) => {
    const length = s.length;
    sum += length;
    if (length > max) {
      max = length;
    }
    arr.push({
      index,
      length,
    });
  });
  n = n - (descriptions.length - 1); // Consider the trailing \n
  if (sum <= n) {
    return descriptions;
  }
  arr.sort((a, b) => b.length - a.length);
  while (sum > n) {
    for (const o of arr) {
      if (o.length >= max) {
        o.length -= 1;
        sum -= 1;
      } else {
        break;
      }
    }
    max -= 1;
  }
  arr.sort((a, b) => a.index - b.index);
  return arr.map(o => {
    const s = descriptions[o.index];
    if (s.length === o.length) return s;
    return s.slice(0, o.length - 1) + "…";
  });
}