let URI= "https://api.spotify.com/v1/artists/7F9Bd5X4sxdwWRJVpbfMtb/top-tracks?market=US"
let buscar=document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
    evento.preventDefault()
    let artista=document.getElementById("artista").value
    console.log(artista)
    URI=`https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`
    const TOKEN="Bearer BQDX1eyQ6YXRT5eKxCM9PVffrzy0zHgvKkGgV5Y7LYxwnLe2mRvb5QqHBEzS2TGdpUZFif7LFvZl_OOOTcV77OwL4vBbX0vB-iKnWJmjNhMmVuJQzz-8lO51fnSse__sQblOj4LzzNfkGt78FNnBCJLr0l14p5wqOjrr3c33kIUH4YkmX3Fjv_WSGMmsoSqMY60"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN},
    }
    fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta) {
    console.log(respuesta)//Hago lo que quiera con respuesta
    console.log(respuesta.tracks)// accedeo a un atributo de la respuesta


    let fila=document.getElementById("fila")
    fila.innerHTML = ""
    //recorrer un arreglo
 
    respuesta.tracks.forEach(function(cancion){
    //  console.log(cancion)
    //  console.log(cancion.name)
    //  console.log(cancion.preview_url)
    //  console.log(cancion.album.images[0].url)
    //  console.log(cancion.popularity)
    //  console.log(cancion.album.name)
    //  console.log(cancion.album.release_date)
   
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
})





.catch(function(respuestaError){
    console.log(respuestaError)
})

})


//RECETA PARA CONSUMIR APIS CON JS PURO

//1. SI YO QUIERO CONSUMIR UNA API DEBO SABER PARA DONDE IR Y AQUE SERVICIO ES DECIR DEBO CONFIGURARR UNA URI




//2.configuro datos especiales o de control en el servidor


//3.configuro la petici??n 
// NOTA: solo POST y PUT configuran Body
//Para JS la peticion es un objeto 


//4.Arranque pues mijo
//consumir el API

