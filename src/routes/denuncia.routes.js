import { Router } from 'express'
import { createNewDenuncia, getDenuncia, getDenunciaByFolio, updateDenunciaByFolio } from '../controllers/denuncia.controllers'

const router = Router()

router.get("/denuncia", getDenuncia);

router.post("/denuncia", createNewDenuncia);

router.get("/denuncia/:folio/:password", getDenunciaByFolio);

router.put("/denuncia/:folio",updateDenunciaByFolio);

export default router