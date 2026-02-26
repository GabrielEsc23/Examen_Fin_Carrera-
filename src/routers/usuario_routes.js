import {Router} from 'express';
import {login} from '../controllers/usuario_controller.js';

const router = Router()

router.post('/usuario/login',login)


export default router