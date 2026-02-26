import mongoose from "mongoose"
import Paciente from '../models/pacientes.js'

// Metodo para crear un Paciente

const registrarPaciente = async (req, res) => {

    // desestructurar el email
    const { email } = req.body

    //  Validar todos los camposs
    if (Object.values(req.body).includes("")) return res.status(400).json({ msg: "Lo sentimos, debes llenar todos los campos" })

    // Obtener el usuario en base al email
    const verificarEmailBDD = await Paciente.findOne({ email })

    // Verificar si el paciente ya se encuentra registrado
    if (verificarEmailBDD) return res.status(400).json({ msg: "Lo sentimos, el email ya se encuentra registrado" })
    
    try{
        // Crear una instancia del Paciente
        const nuevoPaciente = new Paciente(req.body)
        // Guardar en BDD
        await nuevoPaciente.save()
        // Presentar resultados
        res.status(200).json({ msg: "Paciente registrado con éxito" })
    } catch(error){
        res.status(500).json({ msg: "Error al registrar al Paciente" })
    }
}




const listarPaciente = async (req, res) => {
    try {
        const pacientes = await Paciente.find().select("-createdAt -updatedAt -__v")
        res.status(200).json(pacientes)
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener al Paciente" })
    }
}

//  Listar por id 

const detallePaciente = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: `Lo sentimos, no existe el paciente con ID ${id}` })
    }

    try {
        const paciente = await Paciente.findById(id).select("-createdAt -updatedAt -__v")
        res.status(200).json(paciente)
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener al paciente" })
    }



}

export{
    registrarPaciente,
    listarPaciente,
    detallePaciente
}
