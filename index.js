import express from 'express';
import router from './routes/index.js'
import dataBase from './config/db.js'
//const express = require('express');
const app = express();

//Definir puerto
const port = process.env.port || 3500;

//conectar a la base de datos
dataBase.authenticate()
.then(()=>{console.log("conectada");})
.catch(error=>console.log(error))

//Habilitar PUG
app.set('view engine','pug')

app.use((req,res,next)=>{
    const fecha = new Date();
    const formatter = new Intl.DateTimeFormat('es-AR',{
        dateStyle: 'full'
    })

    const fechaFormateada = formatter.format(fecha)
    res.locals.fechaFormateada = fechaFormateada

    next();
})

//agregar body parser para leer los datos del formulario

app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))

//agregar router
app.use('/',router);


app.listen(port, ()=>{
    console.log(`Esuchando por el puerto: ${port}`);
});
