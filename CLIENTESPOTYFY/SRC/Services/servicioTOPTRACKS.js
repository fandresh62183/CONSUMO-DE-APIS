
export  async function consultarCancion(URI,PETICION) {
    
   
   let respuesta=await fetch(URI,PETICION)
   let canciones=await respuesta.json()
   return(canciones)
   
    
}