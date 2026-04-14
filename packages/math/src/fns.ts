export function sumOfArray(arr: number[]): number {
  return arr.reduce((sum, item) => sum + item, 0)
}

export function randomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min
}
