import { Router } from 'express'
import { getAllPais } from '../controllers/pais.controller'

const router = Router()

router.get("/pais", getAllPais);

export default router