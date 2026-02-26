import {Router} from 'express';
import { registrarEspecialidad } from '../controllers/especialidad_controller.js';
import { verificarAutenticacion } from '../middlewares/autenticacion.js';

const router = Router()

router.post('/especialidad/registrar',verificarAutenticacion,registrarEspecialidad)

export default router
