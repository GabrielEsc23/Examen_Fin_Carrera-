import mongoose from "mongoose";
import Especialidad from '../models/especialidades.js'

// Método para crear una Especialidad
const registrarEspecialidad= async (req, res) => {
    const {  nombre, codigo,  descripcion } = req.body

    if (Object.values(req.body).includes("")) {
        return res.status(400).json({ msg: "Lo sentimos, debes llenar todos los campos" })
    }

    // Verificar si ya existe una Especialidad con el mismo código
    const verificarEspecialidadBDD = await Especialidad.findOne({ codigo})
    if (verificarEspecialidadBDD) {
        return res.status(400).json({ msg: "Lo sentimos, el codigo del auditorio ya está registrado" })
    }

    try {
        const nuevaEspecialidad = new Especialidad({  nombre,codigo,descripcion })
        await nuevaEspecialidad.save();
        res.status(200).json({ msg: "Especialidad registrada con éxito" })
    } catch (error) {
        res.status(500).json({ msg: "Error al registrar la especialidad" })
    }
}
export{
    registrarEspecialidad
}