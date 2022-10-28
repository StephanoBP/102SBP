//Matriz Contactos
let contactos = [
    {nombre : "Maxwell Wright",teléfono : "(0191) 719 6495", correo : "Curabitur.egestas.nunc@nonummyac.co.uk"},
    {nombre : "Raja Villarreal",teléfono : "0866 398 2895", correo : "posuere.vulputate@sed.com"},
    {nombre : "Helen Richards",teléfono : "0800 1111", correo : "libero@convallis.edu"}
]
contactos.push({nombre : "Maisie Haley", teléfono : "0913 531 3030", correo : "risus.Quisque@urna.ca"});
console.log("Mostrar el primer contacto:\n"+contactos[0].nombre+" / " + contactos[0].teléfono+" / "+ contactos[0].correo+"\nMostrar el último contacto:\n"+contactos[contactos.length-1].nombre+" / " + contactos[contactos.length-1].teléfono+" / "+ contactos[contactos.length-1].correo);
document.write("<h1>Mostrar el primer contacto.</h1><p>"+contactos[0].nombre+" / " + contactos[0].teléfono+" / "+ contactos[0].correo+"</p><h1>Mostrar el último contacto.</h1><p>"+contactos[contactos.length-1].nombre+" / " + contactos[contactos.length-1].teléfono+" / "+ contactos[contactos.length-1].correo+"</p>");
