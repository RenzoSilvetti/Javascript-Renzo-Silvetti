

let cantidadKm=parseInt(document.getElementById("kilometros".value));
let turnoIngresado=(document.getElementById("seleccionTurno".value))
let turnoMañana=(document.getElementById("turnoMañana".value))
let turnoNoche=(document.getElementById("turnoNoche".value))
let precioxKmNocturno=75 
let precioxKmMatutino=50





const respuesta=document.querySelector("#respuesta")

btnCotizar.addEventListener("click" ,()=> {
    
    function calculoViaje () {


        if(turnoIngresado == turnoMañana) {
        const precioViajeMatutino = precioxKmMatutino * cantidadKm; 
        console.log(precioViajeMatutino)
        return "el precio del viaje es " + precioViajeMatutino} 


        if(turnoIngresado === turnoNoche) {
        const precioViajeNocturno = precioxKmNocturno * cantidadKm; 
        console.log(precioViajeNocturno)
         return "el precio del viaje es " + precioViajeNocturno}
       
    }

})

respuesta.innertext= calculoViaje











    


