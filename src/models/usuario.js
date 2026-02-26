import { Schema,model } from "mongoose";
import bcrypt from "bcryptjs";

const usuarioSchema= new Schema({

    nombre:{
        type:String, 
        require:true,
        trim: true,
        maxlength: 30

    }, 
    apellido:{
        type:String,
        require:true,
        trim:true,
        maxlength: 20


    },

    emai:{

        type:String, 
        require:true,
        

    },
    password:{
        type:String, 
        require:true
    },
 


},
    {
        timestamps:true
    }
)

//Método para cifrar password del usuario 
usuarioSchema.methods.encrypPassword = async function(password){
    const salt = await bcrypt.genSalt(10)
    const passwordEncryp = await bcrypt.hash(password,salt)
    return passwordEncryp
}

// Método para verificar si el password ingresado es el mismo de la BDD
usuarioSchema.methods.matchPassword = async function(password){
    const response = await bcrypt.compare(password,this.password)
    return response
}

// Método para crear un token 
usuarioSchema.methods.crearToken = function(){
    const tokenGenerado = this.token = Math.random().toString(36).slice(2)
    return tokenGenerado
} 

export default model('Usuario', usuarioSchema)