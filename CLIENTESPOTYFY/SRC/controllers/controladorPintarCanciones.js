export function pintarCanciones(canciones){

    let fila=document.getElementById("fila")
    fila.innerHTML = ""

    canciones.tracks.forEach(function(cancion){
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")
    
        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")//<audio class "controls"></audio>
        audio.src=cancion.preview_url
    
        let imagen=document.createElement("img")
        imagen.classList.add("h-100","w-100","img-fluid")
        imagen.src=cancion.album.images[0].url
    
        let popularidad=document.createElement("h1")
        popularidad.classList.add("card","h-100","shadow")
        //padres e hijos
       tarjeta.appendChild(imagen)
       tarjeta.appendChild(audio)
       columna.appendChild(tarjeta)
       fila.appendChild(columna)
    
    
    })
}