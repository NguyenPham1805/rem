import axios from 'axios'
import path from 'path'
import dotenv from 'dotenv'
import { DataResponse, Source } from './type'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const instance = axios.create({
  baseURL: process.env.API_URL_DATA
})

const instance1 = axios.create({
  baseURL: process.env.API_URL1
})

class Model {
  public static categoryAndCountries = async (
    path: string,
    page: number = 1,
    slug: string
  ): Promise<DataResponse> => {
    return instance
      .get(`${path}/${slug}.json?page=${page}&slug=${slug}`)
      .then(({ data }) => data)
      .catch(() => null)
  }

  public static film = async (slug: string): Promise<Source> => {
    return instance1
      .get(`phim/${slug}`)
      .then(({ data }) => data)
      .catch(() => null)
  }

  public static search = async (
    q: string,
    page: number = 1
  ): Promise<DataResponse> => {
    return instance
      .get(`tim-kiem.json?keyword=${q}&page=${page}`)
      .then(({ data }) => data)
      .catch(() => null)
  }

  public static filter = async (
    slug: string,
    sortField: string = '',
    category: string = '',
    country: string = '',
    year: string = '',
    page: number = 1
  ): Promise<DataResponse> => {
    return instance
      .get(
        `danh-sach/${slug}.json?page=${page}&slug=${slug}&country=${country}&sort_field=${sortField}&category=${category}&year=${year}`
      )
      .then(({ data }) => data)
      .catch(() => null)
  }
}

export default Model
