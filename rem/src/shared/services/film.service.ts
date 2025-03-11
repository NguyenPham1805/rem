import axios from 'axios'
import { API_URL } from '../constant'
import { DataResponse, Source } from '../types/film.interface'

const instance1 = axios.create({
  baseURL: API_URL
})

export const getList = async (slug: string | undefined, query: any = {}): Promise<DataResponse> => {
  query.sort = 'newest'
  if (slug == 'phim-sap-chieu') {
    query.status = 'trailer'
  } else {
    query.type = slug
  }
  const { data } = await instance1.get('movie', { params: query })
  return data
}

export const getCategoryAndCountries = async (
  path: string,
  slug: string,
  page: number = 1
): Promise<DataResponse> => {
  let query: any = {}
  query.page = page
  if (path === 'genres') {
    query.category = slug
  } else {
    query.country = slug
  }
  const { data } = await instance1.get('movie', {
    params: query
  })
  return data
}

export const getFilm = async (slug: string): Promise<Source> => {
  const { data } = await instance1.get(`movie/${slug}`)
  return data
}

export const getSearch = async (q: string, page: number = 1): Promise<DataResponse> => {
  const { data } = await instance1.get('movie', { params: { keyword: q, page } })
  return data
}
