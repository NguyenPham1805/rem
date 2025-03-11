import { Request, Response } from 'express'
import axios from 'axios'
import sharp from 'sharp'
import dotenv from 'dotenv'
import path from 'path'
import Model from './model'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

class Controller {
  public static getList = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await Model.filter(
        req.params.slug,
        req.query.srotField as string,
        req.query.category as string,
        req.query.country as string,
        req.query.year as string,
        req.query.page as unknown as number
      )
      if (!data) {
        res.status(404).json({ status: false, error: 'not found' })
        return
      }
      res.status(200).json({
        status: true,
        pagination: data.pageProps.data.params.pagination,
        items: data.pageProps.data.items,
      })
    } catch (error) {
      res.status(500).json(error)
      console.log(error)
    }
  }

  public static getCategoryAndCountries = async (req: Request, res: Response): Promise<void> => {
    const { path, slug } = req.params
    const { page } = req.query
    try {
      const data = await Model.categoryAndCountries(path, page as unknown as number, slug)
      if (!data) {
        res.status(404).json({ status: false, error: 'not found' })
        return
      }
      res.status(200).json({
        status: true,
        pagination: data.pageProps.data.params.pagination,
        items: data.pageProps.data.items,
      })
    } catch (error) {
      res.status(500).json(error)
      console.log(error)
    }
  }

  public static getFilm = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await Model.film(req.params.slug)
      if (!data) {
        res.status(404).json({ status: false, error: 'not found' })
        return
      }
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error)
      console.log(error)
    }
  }

  public static getSearch = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await Model.search(req.query.q as string, req.query.page as unknown as number)
      if (!data) {
        res.status(404).json({ status: false, error: 'not found' })
        return
      }
      res.status(200).json({
        status: true,
        pagination: data.pageProps.data.params.pagination,
        items: data.pageProps.data.items,
      })
    } catch (error) {
      res.status(500).json({ error, message: 'Internal server' })
      console.log(error)
    }
  }

  public static getImage = (req: Request, res: Response): void => {
    try {
      if (!req.query.url) {
        res.status(400).send('URL must not be empty')
        return
      }
      axios
        .get(process.env.IMG_URL + 'uploads/movies/' + req.query.url, {
          responseType: 'arraybuffer',
          headers: {
            referer: process.env.API_URL!,
          },
        })
        .then(({ data }) => {
          return sharp(data).resize(192).toBuffer()
        })
        .then((image) => {
          res.setHeader('cache-control', 'max-age=99999')
          res.setHeader('content-type', 'image/avif')
          res.send(image)
        })
        .catch((error) => console.log(error))
    } catch (error) {
      res.status(500).json({ error, message: 'Internal server' })
      console.log(error)
    }
  }
}

export default Controller
