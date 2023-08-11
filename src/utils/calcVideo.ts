export function getSecVideo({
  min = 0,
  sec = 0,
}: {
  min?: number
  sec?: number
}) {
  return min * 60 + sec
}
