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

// Método para listar todos los auditorios
const listarEspecialidades = async (req, res) => {
    try {
        const especiaslidades = await Especialidad.find().select("-__v")
        res.status(200).json(especiaslidades)
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener Especialidades" })
    }
}


// Método para ver el detalle de una especialidad en particular
const detalleEspecialidad= async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: `Lo sentimos, no existe el especialidad con ID ${id}` });
    }

    try {
        const especialidad= await Especialidad.findById(id).select("-__v")
        res.status(200).json(especialidad)
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener especialidad" })
    }
}

// Método para actualizar una especialidad
const actualizarEspecialidad = async (req, res) => {
    const { id } = req.params

    if (Object.values(req.body).includes("")) return res.status(400).json({ msg: "Lo sentimos, debes llenar todos los campos" })

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: `Lo sentimos, no existe la especialidad con ID ${id}` })
    }

    try {
        await Especialidad.findByIdAndUpdate(id, req.body);
        res.status(200).json({ msg: "Especialidad actualizado con éxito" })
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar pla especilidad" })
    }
}

// Método para eliminar una 
const eliminarEspecialidad = async (req, res) => {
    const { id } = req.params;

    if (Object.values(req.body).includes("")) return res.status(400).json({ msg: "Lo sentimos, debes llenar todos los campos" })

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: `Lo sentimos, no existe el auditorio con ID ${id}` })
    }

    try {
        await Auditorio.findByIdAndDelete(id);
        res.status(200).json({ msg: "Auditorio eliminado con éxito" })
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar el auditorio" })
    }
}
export{
    registrarEspecialidad,
    listarEspecialidades,
    detalleEspecialidad,
    actualizarEspecialidad
}