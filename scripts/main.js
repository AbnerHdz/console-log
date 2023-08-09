alert("On this page, a brief text with my information is displayed in the console.")

var info = {
    nombre : 'Abner',
    apellido : 'Rosales',
    ciudadDeNacimiento : 'Guadalajara',
    estadoDeNacimiento : 'Jalisco',
    fechaDeNacimiento : '7 de Enero de 1998',
    edad : 25,
    direccion : 'Calle 24A #333 Temozon Norte',
    cp : 97300,
    ciudad : 'Mérida',
    estado : 'Yucatan',
    celular : 3332832990
}

console.log("Hola mi nombre es " + info.nombre + " y mi apellido es " + info.apellido + " nací en la ciudad de " + info.ciudadDeNacimiento + " en el estado de " + info.estadoDeNacimiento + ", nací el: " + info.fechaDeNacimiento + " por lo que actualmente tengo " + info.edad + " años. Actualmente vivo en la ciudad de " + info.ciudad + " en el estado de " + info.estado + " en la dirección: " + info.direccion + " con el CP: " + info.cp + " espero esto haya servido para que me conozcan un poco mas, mi numero telefonico es: " + info.celular + " muchas gracias!.")

console.log( typeof info.nombre);
console.log( typeof info.apellido);
console.log( typeof info.ciudadDeNacimiento);
console.log( typeof info.estadoDeNacimiento);
console.log( typeof info.fechaDeNacimiento);
console.log( typeof info.edad);
console.log( typeof info.direccion);
console.log( typeof info.cp);
console.log( typeof info.ciudad);
console.log( typeof info.estado);
console.log( typeof info.celular);