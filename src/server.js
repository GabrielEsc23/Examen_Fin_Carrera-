//Imprtacion de librerias
import express from 'express';
import dotnev from 'dotenv';
import cors from 'cors';
import routerUsuario from './routers/usuario_routes.js'
// Inicializar el objeto de express
const app= express()
dotnev.config()

// Confifuraciones 
app.set('port',process.env.port || 3000)
app.use(cors())

// Middlewares 
app.use(express.json())

// Rutas 
app.get('/',(req,res)=>{
    res.send("Server on")
})

//Rutas sistema
app.use('/api',routerUsuario)

// Rutas no encontradas
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))

// Exportar la instancia de express por medio de app
export default  app