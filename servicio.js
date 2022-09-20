const URI='https://api.spotify.com/v1/tracks?market=US&ids=3Mcii5XWf6E0lrY3Uky4cA'

const TOKEN='Bearer BQDYZRkcwUTvAMXd-nO6jQYUJVe6L6kdkhwizl6qDuBk2WOJ_OnIc-BCMw0mfPJH5NHU3Xd5pLrBzo_ZrPayXVVzsI3iF8epIyawRIwaf-hExJSMzeNmIR6YgRauZhIEwZM1F1S8Dg-fXAxwbm_q3QWC9x6Gh5-fTn9-e0TdlH3gpd5cx46J5hhIG8E6XpRTiDI'


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