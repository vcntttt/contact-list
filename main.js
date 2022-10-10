let list = ['Vicente Rivera', ' Evelyn Sanchez' , 'Genesis Diaz']
function agregarContacto(nombreContacto){
    list.push(nombreContacto)
    return console.log(nombreContacto + " agregado")
}
function eliminarContacto(){
    list.pop()                     //no supe como eliminar un contacto en especifico
    return console.log("ultimo contacto removido")
}
function mostrarContactos(){
    console.log(list)
}