export const imgPipe = (url: string, apiUrl?: string): string => {
  if (!url) return ''
  if (apiUrl) return apiUrl + 'image?url=' + url
  return new URL(url, import.meta.url).href
}

export const toSlugPipe = (str: string, separator?: string): string => {
  str = str
    .toLowerCase()
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
    .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
    .replace(/đ/g, 'd')
    .replace(/\s+/g, '-')
    .replace(/[^A-Za-z0-9_-]/g, '')
    .replace(/-+/g, '-')
  if (separator) {
    return str.replace(/-/g, separator)
  }
  return str
}

export const typeToTag = (type: 'series' | 'single' | 'hoathinh' | 'tvshows'): string => {
  switch (type) {
    case 'series':
      return 'TV-Series'
    case 'single':
      return 'Movie'
    case 'hoathinh':
      return 'Anime'
    case 'tvshows':
      return 'TV-Shows'
    default:
      return 'Movie'
  }
}

export const contentPipe = (str: string): string => {
  if (!str.startsWith('<p>')) return str
  return str.slice(3).slice(0, -4)
}

export const timePipe = (time?: number): string => {
  if (!time) return '00:00'
  let currentHour = Math.floor(time / 60 / 60)
  let currentMin = Math.floor((time / 60) % 60)
  let currentSec = Math.floor(time % 60)

  currentHour < 10 ? ((currentHour as unknown as string) = '0' + currentHour) : currentMin
  currentMin < 10 ? ((currentMin as unknown as string) = '0' + currentMin) : currentMin
  currentSec < 10 ? ((currentSec as unknown as string) = '0' + currentSec) : currentSec
  if (time >= 3600) return `${currentHour}:${currentMin}:${currentSec}`
  return `${currentMin}:${currentSec}`
}

export const timeLeftPipe = (date: any): string => {
  const seconds = Math.floor((Date.now() - date) / 1000)
  let interval = seconds / 31536000

  if (interval > 1) return Math.floor(interval) + ' năm trước'
  interval = seconds / 2592000
  if (interval > 1) return Math.floor(interval) + ' tháng trước'
  interval = seconds / 86400
  if (interval > 1) return Math.floor(interval) + ' ngày trước'
  interval = seconds / 3600
  if (interval > 1) return Math.floor(interval) + ' giờ trước'
  interval = seconds / 60
  if (interval > 1) return Math.floor(interval) + ' phút trước'
  if (seconds < 10) return 'vừa xong'
  return Math.floor(seconds) + ' giây trước'
}

export const datePipe = (date: string | number | Date) => {
  let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return `${day}/${month}/${year}`
}

export const checkReactionPipe = (
  reaction: { [key: string]: number },
  uid: string | undefined,
  type: number
): boolean => {
  if (!uid) return false
  return Object.entries(reaction).find((key) => key[0] === uid)?.[1] === type
}

export const reactionPipe = (value: { [key: string]: number }, type: number): number => {
  return Object.values(value).filter((item) => item === type).length
}

export const ratingPipe = (value: {
  [key: string]: number
}): { totalUserRating: number; rating: string } => {
  if (JSON.stringify(value) === '{}') {
    return {
      rating: 'N/A',
      totalUserRating: 0
    }
  }
  return {
    rating: `${
      Object.values(value).reduce((prev, cur) => prev + cur, 0) / Object.values(value).length
    }/10`,
    totalUserRating: Object.values(value).length
  }
}

export const checkRatingPipe = (value: { [key: string]: number }, uid?: string): boolean => {
  if (!uid) return false
  const keys = Object.keys(value)
  for (let i = 0; i < keys.length; i++) if (keys[i] === uid) return true
  return false
}

export const checkFolowPipe = (value: { [key: string]: number }, uid?: string): boolean => {
  if (!uid) return false
  return Object.entries(value).find((key) => key[0] === uid)?.[1] === 1
}

export const keySelectPipe = (key: string): string => {
  switch (key) {
    case 'slug':
      return 'Loại phim'
    case 'country':
      return 'Quốc gia'
    case 'sortField':
      return 'Sắp xếp theo'
    case 'category':
      return 'Thể loại'
    case 'year':
      return 'Năm phát hành'
    default:
      return ''
  }
}

export const checkObjEmpty = (obj: Object): boolean => {
  for (const _ in obj) return false
  return true
}

export const filterObj = (obj: Object, condition: Object): Object => {
  const newObj = { ...obj }
  let key: keyof typeof newObj
  for (key in obj) {
    if (key in condition) delete newObj[key]
  }
  return newObj
}
