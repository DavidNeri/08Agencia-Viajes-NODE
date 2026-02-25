import { request } from 'express'
import {viajes} from '../models/viajes.js'
import {testimonios} from '../models/testimonios.js'

const paginaInicio = (req, res)=>{
    res.render('inicio',{
        pagina: 'Inicio',
        clase:'home'
        
    })    
}
const paginaViajes = async (req,res)=>{ 
        const listadoViajes =  await viajes.findAll()
        res.render('viajes', {
        pagina:'Viajes',
        listadoViajes 
        
    })
}

const paginaTestimoniales = async (req, res)=>{
    const listadoTestimonios = await testimonios.findAll()

    res.render('testimoniales',{
            pagina: 'Testimoniales',
            listadoTestimonios
        })
}
const paginaNosotros = (req, res)=>{
    res.render('nosotros',{
        pagina:'Nosotros'
    })
}

const paginaDetalleViaje =async (req, res)=>{
    const { slug }  = req.params
    const detallesViaje = await viajes.findAll({
        where: {
            slug: slug
        }
    })

    res.render('detalleViaje',{
        pagina: slug,
        detallesViaje: detallesViaje[0]
    })
    

}

export {
    paginaInicio,
    paginaViajes,
    paginaTestimoniales,
    paginaNosotros,
    paginaDetalleViaje
}