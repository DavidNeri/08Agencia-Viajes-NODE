import { request } from 'express'
import {viajes} from '../models/viajes.js'
import { testimonios } from '../models/testimonios.js'

const guardarTestimonial = async (req, res, next)=>{
    const listadoTestimonios = await testimonios.findAll()
    const {nombre, email, testimonio} = req.body
    const errores = [];

    if((nombre != undefined && nombre.trim()=='') || nombre == undefined)
    errores.push({mensaje:'El nombre está vacio'})  

    if((email != undefined && email.trim()=='') || email == undefined)
    errores.push({mensaje:'El correo está vacio'})    

    if((testimonio != undefined && testimonio.trim()=='') || testimonio == undefined)
    errores.push({mensaje:'El mensaje está vacio'})    

    if(errores.length>0){
        res.render('testimoniales',{
            pagina:'testimoniales',
            err: errores,
            nombre,
            email,
            testimonio,
            listadoTestimonios
        })
    }else{
        const nuevoTestimonio = {
            nombre: nombre,
            correo: email,
            testimonio: testimonio
        }

        try {
            await testimonios.create({
            nombre: nombre,
            correo: email,
            testimonio: testimonio

            })    
        } catch (error) {
            console.log(error);
        }

        const listadoTestimonios = await testimonios.findAll()
        res.render('testimoniales',{
            pagina:'testimoniales',
            listadoTestimonios
            
        })
    }
}
export {
    guardarTestimonial
}