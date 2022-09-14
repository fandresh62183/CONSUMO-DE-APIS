const URI='https://api.spotify.com/v1/artists/6DPYiyq5kWVQS4RGwxzPC7/top-tracks?market=US'

const TOKEN='Bearer BQBlfDPX9eurwFQw7H_cvOi0PyOohFdA7AvsCxXVeFQZ3Lb4ujtK7dzXXRLH6ZQN1ceIjeeEEzY0m-c5ZqKm5rG3VJ2ThI-uvGuZjAQr67W9AZhVpUNT2vRo-Ye1OJcxg2ckJeRgAxfo_VB7Y9BFDslMDr769QJsFPeckN2CjF5kjJffCXn2ChkEnd0JKs92cxM'


const PETICION={
    method:'GET',
    headers:{
        Authorization:TOKEN
    }
}

fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})

.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){

})