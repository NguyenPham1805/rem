import axios from 'axios'
import { API_URL } from '../constant'
import { DataResponse, Source } from '../types/film.interface'

const instance1 = axios.create({
  baseURL: API_URL
})

export const getList = async (
  slug: string = 'phim-moi',
  query: any = {}
): Promise<DataResponse> => {
  const { data } = await instance1.get('list/' + slug, { params: query })
  return data
}

export const getCategoryAndCountries = async (
  path: string,
  slug: string,
  page: number = 1
): Promise<DataResponse> => {
  path = path === 'genres' ? 'the-loai' : 'quoc-gia'
  const { data } = await instance1.get('data/' + path + '/' + slug, { params: { page } })
  return data
}

export const getFilm = async (slug: string): Promise<Source> => {
  const { data } = await instance1.get(`film/${slug}`)
  return data
}

export const getSearch = async (q: string, page: number = 1): Promise<DataResponse> => {
  const { data } = await instance1.get('search', { params: { q, page } })
  return data
}
