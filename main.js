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
    console.log("Agregando contacto")
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

function eliminarContacto(){
    let cambio = prompt("¿Que contacto quiere eliminar?: ");
    let index = contacts.findIndex((elemento) => {
        return elemento.id === cambio;}) ;
   contacts.splice(index,1)
   return console.log(cambio + " eliminado")

}
function mostrarContactos(){
    console.log(contacts)
}
function actualizarContacto(){
    let cambio = prompt("¿Que contacto quiere cambiar?: ");
    let index = contacts.findIndex((elemento) => {
        return elemento.id === cambio;}) ;
        console.log("Ingrese los nuevos valores: ")
        let newNombre = prompt("Nombre: " );
        let newApellido = prompt("Apellido: ");
        let newTelefono = parseInt(prompt("Telefono: "));
        while(isNaN(newTelefono)){
            console.error("El valor ingresado no es un numero, favor de volver a intentarlo")
            newTelefono = "unknown"
            newTelefono = parseInt(prompt("Ingresa un número telefónico: "))
        }
        let newCiudad = prompt("Ciudad: ");
        let newDireccion = prompt("Direccion: ");
        let newObj = new Contact(cambio,newNombre,newApellido,newTelefono,newCiudad,newDireccion)
    contacts.splice(index,1,newObj)
    return console.log(cambio + " modificado") }

function ordernarContactos(){
    contacts.sort((a,b) => {
        if (a.id < b.id){
            return -1;
        }
        if(a.id > b.id){
            return 1
        }
        return 0;
    })}


agregarContacto()
eliminarContacto()
actualizarContacto()
ordernarContactos()
mostrarContactos()