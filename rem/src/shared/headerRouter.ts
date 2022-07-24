import { COUNTRIES, GENRES } from './constant'
import { Link } from './types/film.interface'

interface HeaderRoute {
  name: string
  routeName: string
  path: string
  isDropdown?: boolean
  dropdownData?: Link[]
}

export const headerRoutes: HeaderRoute[] = [
  {
    name: 'TV',
    routeName: 'List',
    path: 'tv-series'
  },
  {
    name: 'Phim lẻ',
    routeName: 'List',
    path: 'movie'
  },
  {
    name: 'Shows',
    routeName: 'List',
    path: 'tv-shows'
  },
  {
    name: 'Anime',
    routeName: 'List',
    path: 'anime'
  },
  {
    name: 'Thể loại',
    routeName: 'Category',
    path: 'genres',
    isDropdown: true,
    dropdownData: GENRES
  },
  {
    name: 'Quốc gia',
    routeName: 'Category',
    path: 'countries',
    isDropdown: true,
    dropdownData: COUNTRIES
  }
]
