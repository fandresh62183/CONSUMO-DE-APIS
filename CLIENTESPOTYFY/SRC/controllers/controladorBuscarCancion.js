import{generarURI} from '../helpers/generarURI.js'
import {consultarCancion} from '../Services/servicioTOPTRACKS.js'
import{PETICION} from '../helpers/constantesGET.js'

import {pintarCanciones} from '../controllers/controladorPintarCanciones.js'

let buscar=document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
    evento.preventDefault()

    // obtengo el id del artista que busca el usuario
    let idArtistaSeleccionado=document.getElementById("artista").value
    let uri=generarURI(idArtistaSeleccionado)

    // llamando al servicio (asicrono) desde el controlador
    let respuesta= consultarCancion(uri,PETICION)
   .then(function(canciones){
    pintarCanciones(canciones)
   })

   
})