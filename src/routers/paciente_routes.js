import {Router} from 'express';
import { registrarPaciente,listarPaciente,detallePaciente } from '../controllers/paciente_controller.js';
import { verificarAutenticacion } from '../middlewares/autenticacion.js';

const router = Router()
router.post('/paciente/registrar',verificarAutenticacion,registrarPaciente)
router.get('/paciente/listar',verificarAutenticacion,listarPaciente)
router.get('/paciente/detalle/:id',verificarAutenticacion,detallePaciente)

export default router