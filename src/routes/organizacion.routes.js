import { Router } from 'express'
import { getAllOrganizacion } from '../controllers/organizacion.controller'

const router = Router()

router.get("/organizacion", getAllOrganizacion);

export default router