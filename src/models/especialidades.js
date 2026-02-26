import { Schema, model } from "mongoose";

const especialidadSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    codigo:{
        type:String,
        require:true,
        trim:true
        
    },
    
    descripcion:{
        type:String,
        require:true,
        
    },
    
},{
    timestamps:true
})


export default model('Especialidad', especialidadSchema)