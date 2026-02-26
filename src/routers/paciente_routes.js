import {Router} from 'express';
import { registrarPaciente } from '../controllers/paciente_controller.js';
import { verificarAutenticacion } from '../middlewares/autenticacion.js';

const router = Router()
router.post('/paciente/registrar',verificarAutenticacion,registrarPaciente)

export default router