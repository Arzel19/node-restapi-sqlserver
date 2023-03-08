import { Router } from 'express'
import { getUsuariosByLogin } from '../controllers/usuarios.controller'

const router = Router()

router.get("/usuarios/:username/:password", getUsuariosByLogin);

export default router