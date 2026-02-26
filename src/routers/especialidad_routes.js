import {Router} from 'express';
import { actualizarEspecialidad, detalleEspecialidad, listarEspecialidades, registrarEspecialidad } from '../controllers/especialidad_controller.js';
import { verificarAutenticacion } from '../middlewares/autenticacion.js';

const router = Router()

router.post('/especialidad/registrar',verificarAutenticacion,registrarEspecialidad)
router.get('/especialidad/listar',verificarAutenticacion,listarEspecialidades)
router.get('/especialidad/detalle/:id',verificarAutenticacion,detalleEspecialidad)
router.put('/especialidad/actualizar/:id',verificarAutenticacion,actualizarEspecialidad)



export default router
