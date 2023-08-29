export function getSecVideo({
  min = 0,
  sec = 0,
}: {
  min?: number
  sec?: number
}) {
  return min * 60 + sec
}

export function getTimeStringVideo(timeStr: string) {
  const [min, sec] = timeStr.replace(/\s/g, '').trim().split(':')

  return getSecVideo({
    min: Number(min),
    sec: Number(sec),
  })
}
