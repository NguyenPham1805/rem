export interface Item {
  modified: {
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
  category: Link[]
  country: Link[]
}

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
    server_data: DataLink[]
  }[]
}

export interface Link {
  id?: string
  slug: string
  name: string
}

export interface DataResponse {
  pageProps: {
    data: {
      seoOnPage: {
        og_type: string
        titleHead: string
        descriptionHead: string
        h2: Link[]
        og_image: string[]
        og_url: string
      }
      breadCrumb: {
        name: string
        slug: string
        isCurrent: boolean
        position: number
      }[]
      titlePage: string
      items: Item[]
      params: {
        type_slug: string
        filterCategory: string[]
        filterCountry: string[]
        filterYear: string
        filterType: string
        sortField: string
        sortType: string
        pagination: {
          totalItems: number
          totalItemsPerPage: number
          currentPage: number
          totalPages?: number
          pageRanges?: number
        }
      }
      type_list: string
    }
  }
  __N_SSP: boolean
}

export interface DataLink {
  name: string
  slug: string
  filename: string
  link_embed: string
  link_m3u8: string
}

export interface ListResponse {
  items: Item[]
  pagination: {
    totalItems: number
    totalItemsPerPage: number
    currentPage: number
    pageRanges: number
  }
}
