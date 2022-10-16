const prompt = require("prompt-sync")() ;
class Contact{
    constructor(id, nombre, lastname, numberphone, city, adress){
        this.id = id
        this.Nombre = nombre
        this.Apellido = lastname
        this.Telefono = numberphone
        this.Ubicacion = {
        "Ciudad" : city ,
        "Direccion" :  adress
            }
        }
    }
let contacts = [
    {
        id: "Mama",
        Nombre: "Evelyn",
        Apellido: "Sanchez",
        Telefono: 999893601,
        Ubicacion: {
            Ciudad: "Vilcun",
            Dirección : "Poblacion Victoria"
        }

    },
    {
        id: "Papa",
        Nombre: "Rodrigo",
        Apellido: "Rivera",
        Telefono: 998470908,
        Ubicacion: {
            Ciudad: "Temuco",
            Direccion : "Villa Santa Carolina"
        }
    },
]

function agregarContacto(){
    let id = prompt("Ponle un apodo: ")
    let nombre = prompt("Nombre: ") ;
    let lastname = prompt("Apellido: ") ;
    let numberphone = parseInt(prompt("Ingresa un número telefónico: ")) ;
        while(isNaN(numberphone)){
            console.error("El valor ingresado no es un numero, favor de volver a intentarlo")
            numberphone = "unknown"
            numberphone = parseInt(prompt("Ingresa un número telefónico: "))
        }
    let city = prompt("Ciudad: ")  ; 
    let adress = prompt("Direccion: ") ;
    contacts.push(new Contact(id, nombre, lastname, numberphone, city, adress))
    return console.log( id +" agregado")
}

function eliminarContacto(valueid){
let index = contacts.findIndex((elemento) => {
    return elemento.id === valueid;
   }) ;
   contacts.splice(index,1)
   return console.log(valueid + " eliminado")

}
function mostrarContactos(){
    console.log(contacts)
}
