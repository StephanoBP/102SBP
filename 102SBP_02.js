/*let nombre = ["Maxwell Wright","Raja Villarreal","Helen Richards"];
* let teléfono = ["(0191) 719 6495", "0866 398 2895", "0800 1111"];
* let correo = ["Curabitur.egestas.nunc@nonummyac.co.uk","posuere.vulputate@sed.com", "libero@convallis.edu"];
*
*let contacto1 = ["Maxwell Wright","(0191) 719 6495","Curabitur.egestas.nunc@nonummyac.co.uk"];
*let contacto2 = ["Raja Villarreal","0866 398 2895","posuere.vulputate@sed.com"];
*let contacto3 = ["Helen Richards","0800 1111","libero@convallis.edu"];
*
*let contactos = [contacto1,contacto2,contacto3];
*let nuevoContacto = ["Maisie Haley","0913 531 3030","risus.Quisque@urna.ca"];
*contactos.push(nuevoContacto);
*/
let contactos = [
    {nombre : "Maxwell Wright",teléfono : "(0191) 719 6495", correo : "Curabitur.egestas.nunc@nonummyac.co.uk"},
    {nombre : "Raja Villarreal",teléfono : "0866 398 2895", correo : "posuere.vulputate@sed.com"},
    {nombre : "Helen Richards",teléfono : "0800 1111", correo : "libero@convallis.edu"}
]
contactos.push({nombre : "Maisie Haley", teléfono : "0913 531 3030", correo : "risus.Quisque@urna.ca"});
//console.log(contactos[0]);
//alert(contactos[contactos.length-1])
//console.log(contactos[contactos.length-1]);

//for(let a of contactos){
//alert("nombre: "+a.nombre+", teléfono: " + a.teléfono+", correo: " + a.correo+".");
//}
document.write("<h1 style=\"color:white;\">Mostrar el primer contacto y el último:</h1>")
for(i = 0 ;i<contactos.length;i++){
    if(i==0||i==contactos.length-1){
        document.write("<p style=\"color:white;\">");
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