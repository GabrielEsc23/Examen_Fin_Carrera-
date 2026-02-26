import mongoose from "mongoose";

mongoose.set('strictQuery', true)

 const connectDB= async()=>{
    try{
        const {connection}=await mongoose.connect(process.env.MONGO_URI)
        console.log(`La base de datos está conectada en ${connection.host}-${connection.port}`)
    }catch(error){
        console.log(error)
    }
 }

 export default connectDB