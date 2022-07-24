export interface Source {
  status: boolean
  msg: string
  movie: {
    modified: {
      time: string
    }
    _id: string
    name: string
    origin_name: string
    content: string
    type: 'series' | 'single' | 'hoathinh' | 'tvshows'
    status: string
    thumb_url: string
    poster_url: string
    is_copyright: 'off' | 'on'
    sub_docquyen: 'off' | 'on'
    chieurap: boolean
    trailer_url: string
    time: string
    episode_current: string
    episode_total: string
    quality: 'HD' | 'SD' | 'LD'
    lang: string
    notify: string
    showtimes: string
    slug: string
    year: number
    actor: string[]
    director: string[]
    category: { name: string }[]
    country: { name: string }[]
  }
  episodes: {
    server_name: string
    server_data: SourceLink[]
  }[]
}

export interface SourceLink {
  name: string
  slug: string
  filename: string
  link_embed: string
  link_m3u8: string
}

export interface DataResponse {
  status: boolean
  items: Item[]
  pagination: {
    totalItems: number
    totalItemsPerPage: number
    currentPage: number
    totalPages?: number
    pageRanges?: number
  }
}

export interface SearchResponse {
  items: Item[]
  pagination: {
    totalItems: number
    totalItemsPerPage: number
    currentPage: number
    pageRanges: number
  }
}

export interface Item {
  modified?: {
    time: string
  }
  _id: string
  name: string
  origin_name: string
  thumb_url: string
  poster_url: string
  sub_docquyen?: string
  chieurap: false
  time: string
  episode_current: string
  quality: string
  lang: string
  slug: string
  year: number
  score?: number
  category?: Link[]
  country?: Link[]
}

export interface Link {
  id?: string
  slug: string
  name: string
}

export interface FilmResponse {
  status: boolean
  msg: string
  movie: FilmInfo
  episodes: {
    server_name: string
    server_data: DataLink[]
  }[]
}

export interface FilmInfo {
  modified: {
    time: string
  }
  _id: string
  name: string
  origin_name: string
  content: string
  type: 'series' | 'single' | 'hoathinh' | 'tvshows'
  status: string
  thumb_url: string
  poster_url: string
  is_copyright: 'off' | 'on'
  sub_docquyen: 'off' | 'on'
  chieurap: boolean
  trailer_url: string
  time: string
  episode_current: string
  episode_total: string
  quality: 'HD' | 'SD' | 'LD'
  lang: string
  notify: string
  showtimes: string
  slug: string
  year: number
  actor: string[]
  director: string[]
  category: { name: string }[]
  country: { name: string }[]
}

export interface FilmInfoFromFirebase {
  name: string
  slug: string
  year: number
  country: string
  thumb_url: string
  folows: { [key: string]: number }
  reaction: { [key: string]: number }
  rating: { [key: string]: number }
  views: number
}

export interface DataLink {
  name: string
  slug: string
  filename: string
  link_embed: string
  link_m3u8: string
}

export interface FilmHistory {
  id?: string
  name: string
  originName: string
  epLastestName: string
  epLastest: number
  type: 'series' | 'single' | 'hoathinh' | 'tvshows'
  category: [
    {
      name: string
    }
  ]
  slug: string
  thumb_url: string
  createdAt: {
    seconds: number
    nanoseconds: number
  }
}

export interface EpisodeHistory {
  id?: string
  epIndex: number
  currentTime: number
  epName: string
  duration: number
  createdAt: {
    seconds: number
    nanoseconds: number
  }
}
