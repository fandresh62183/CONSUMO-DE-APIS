//RECETA PARA CONSUMIR APIS CON JS PURO

//1. SI YO QUIERO CONSUMIR UNA API DEBO SABER PARA DONDE IR Y AQUE SERVICIO ES DECIR DEBO CONFIGURARR UNA URI


const URI= "https://api.spotify.com/v1/artists/7dGJo4pcD2V6oG8kP0tJRR/top-tracks?market=US"

//2.configuro datos especiales o de control en el servidor
const TOKEN="Bearer BQCGTyV2eESzPKOApdctmWtLmy8EVPxDuJJ60CdJoPr6-PMADi5EBpyDSbfcCXX9GNJIpLOcXhJG8ehqREv3n1H3_rWIowYQBI3X4vGNBrtw87WSWmQCmckBUkDEryT4lE6OXiJECpwltqDhjRm8upr7bGGiTijwmq2le96w7wImL6ahmdUgTmzquaRnnPEjj5k"

//3.configuro la petición 
// NOTA: solo POST y PUT configuran Body
//Para JS la peticion es un objeto 
const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN},
}

//4.Arranque pues mijo
//consumir el API

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta) {
    console.log(respuesta)//Hago lo que quiera con respuesta
    console.log(respuesta.tracks)// accedeo a un atributo de la respuesta

    //recorrer un arreglo
    respuesta.tracks.forEach(function(cancion){
     console.log(cancion)
     console.log(cancion.name)
     console.log(cancion.preview_url)
     console.log(cancion.album.images[0].url)
     console.log(cancion.popularity)
     console.log(cancion.album.name)
     console.log(cancion.album.release_date)

    })
})





.catch(function(respuestaError){
    console.log(respuestaError)
})