let contactos = [
    {nombre : "Maxwell Wright",teléfono : "(0191) 719 6495", correo : "Curabitur.egestas.nunc@nonummyac.co.uk"},
    {nombre : "Raja Villarreal",teléfono : "0866 398 2895", correo : "posuere.vulputate@sed.com"},
    {nombre : "Helen Richards",teléfono : "0800 1111", correo : "libero@convallis.edu"}
]
contactos.push({nombre : "Maisie Haley", teléfono : "0913 531 3030", correo : "risus.Quisque@urna.ca"});
for(let i = 0 ;i<contactos.length;i++){
    if(i==0||i==contactos.length-1){
        if(i==0)document.write("<h1>Mostrar el primer contacto.</h1><p>");
        else{document.write("<h1>Mostrar el último contacto.</h1><p>");}
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