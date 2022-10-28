let contactos = [
    {nombre : "Maxwell Wright",teléfono : "(0191) 719 6495", correo : "Curabitur.egestas.nunc@nonummyac.co.uk"},
    {nombre : "Raja Villarreal",teléfono : "0866 398 2895", correo : "posuere.vulputate@sed.com"},
    {nombre : "Helen Richards",teléfono : "0800 1111", correo : "libero@convallis.edu"}
];
contactos.push({nombre : "Maisie Haley", teléfono : "0913 531 3030", correo : "risus.Quisque@urna.ca"});

let nombres,teléfonos,correos;

nombres = String(prompt("Dame tu nombre"));
teléfonos = String(prompt("Dame tu teléfono"));
correos = String(prompt("Dame tu correo"));
contactos.push({nombre : nombres, teléfono : teléfonos, correo : correos});
document.write("<h1>Mostrar el primer contacto y el último:</h1>");
console.log("Mostrar el primer contacto y el último:");
for(i=0;i<contactos.length;i++){
    if(i==0||i==contactos.length-1){
        document.write("<p>");
        console.log(contactos[i].nombre+" / " + contactos[i].teléfono+" / "+ contactos[i].correo);
        for(let a in contactos[i]){
            if(contactos[i][a]!=contactos[i].correo){
                document.write(contactos[i][a]+" / ");
            }else{
                document.write(contactos[i][a]);
            }
            
        }
        document.write("</p>");
    }
}
