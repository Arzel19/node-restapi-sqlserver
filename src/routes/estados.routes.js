import { Router } from 'express'
import { getEstadosByID } from '../controllers/estados.controller'

const router = Router()

router.get("/estados/:PaisID", getEstadosByID);

export default router