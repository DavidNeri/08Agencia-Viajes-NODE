import express from 'express';
import { 
    paginaInicio,
    paginaViajes,
    paginaTestimoniales,
    paginaNosotros,
    paginaDetalleViaje
} from '../controllers/paginasController.js'

import {guardarTestimonial} from '../controllers/testimonialesController.js'

const router = express.Router();

router.get('/', paginaInicio)
router.get('/inicio', paginaInicio)
router.get('/viajes',paginaViajes)
router.get("/testimoniales",paginaTestimoniales)
router.get("/nosotros",paginaNosotros)
router.get('/viajes/:slug', paginaDetalleViaje)
router.post('/testimoniales',guardarTestimonial)

export  default router