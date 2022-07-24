import { Router, Response } from 'express'
import Controller from './controller'

const router = Router()

router.get('/list/:slug', Controller.getList)
router.get('/data/:path/:slug', Controller.getCategoryAndCountries)
router.get('/film/:slug', Controller.getFilm)
router.get('/search', Controller.getSearch)
router.get('/image', Controller.getImage)
router.get('*', (_, res: Response) => {
  res.status(404).json({ status: false, error: 'not found' })
})

export default router
