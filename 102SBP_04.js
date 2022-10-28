let contactos = [
    {nombre : "Maxwell Wright",teléfono : "(0191) 719 6495", correo : "Curabitur.egestas.nunc@nonummyac.co.uk"},
    {nombre : "Raja Villarreal",teléfono : "0866 398 2895", correo : "posuere.vulputate@sed.com"},
    {nombre : "Helen Richards",teléfono : "0800 1111", correo : "libero@convallis.edu"}
]
let booleanos=true;

do{
    opcion=String(prompt("Dime cual opción quieres elegir(1/2/3):\n1-Mostrar el primer contacto.\n2-Mostrar el último contacto.\n3-Añadir nuevo contacto."));
    if(opcion.match(/\D/)||opcion==""||opcion.match(/\s/)||opcion<1||opcion>3){
        alert("Esta no es una opción permitida, repítalo de nuevo.");
    }else{
        booleanos=false;
    }
}while(booleanos);
if(opcion==1){
    document.write("<h1>Mostrar el primer contacto.</h1><p>")
    for(let a in contactos[0]){
        if(contactos[0][a]!=contactos[0].correo){
            document.write(contactos[0][a]+" / ");
        }else{
            document.write(contactos[0][a]);
        }
        
    }
    document.write("</p>");
}else if(opcion==2){
        console.log(contactos[contactos.length-1]);
        document.write("<h1>Mostrar el último contacto.</h1><p>")
        for(let a in contactos[contactos.length-1]){
            if(contactos[contactos.length-1][a]!=contactos[contactos.length-1].correo){
                document.write(contactos[contactos.length-1][a]+" / ");
            }else{
                document.write(contactos[contactos.length-1][a]);
            }
            
        }
        document.write("</p>");
}else if(opcion==3){
    let nombres=prompt("Dime un nombre");
    let teléfonos=prompt("Dime un numero");
    let correos=prompt("Dime un correo");
    if(nombres!="" && teléfonos!="" && correos!=""){
        contactos.push({nombre : nombres, teléfono : teléfonos, correo : correos});
        document.write("<h1>Añadir nuevo contacto.</h1><p>Has introducido los siguientes datos:<br>nombre: "+ nombres + "<br>teléfono: " + teléfonos + "<br>correo: " + correos+"</p>");
    }
}