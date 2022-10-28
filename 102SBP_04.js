//Matriz Contactos
let contactos = [
    {nombre : "Maxwell Wright",teléfono : "(0191) 719 6495", correo : "Curabitur.egestas.nunc@nonummyac.co.uk"},
    {nombre : "Raja Villarreal",teléfono : "0866 398 2895", correo : "posuere.vulputate@sed.com"},
    {nombre : "Helen Richards",teléfono : "0800 1111", correo : "libero@convallis.edu"}
]
//Codigo Opciones
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
    document.write("<h1>Mostrar el primer contacto.</h1><p>"+contactos[0].nombre+" / " + contactos[0].teléfono+" / "+ contactos[0].correo+"</p>");
    console.log("Mostrar el primer contacto\n"+contactos[0].nombre+" / " + contactos[0].teléfono+" / "+ contactos[0].correo);
}else if(opcion==2){
    console.log("Mostrar el último contacto\n"+contactos[contactos.length-1].nombre+" / " + contactos[contactos.length-1].teléfono+" / "+ contactos[contactos.length-1].correo);
    document.write("<h1>Mostrar el último contacto.</h1><p>"+contactos[contactos.length-1].nombre+" / " + contactos[contactos.length-1].teléfono+" / "+ contactos[contactos.length-1].correo+"</p>");
}else if(opcion==3){
    let nombres=prompt("Dime un nombre");
    let teléfonos=prompt("Dime un numero");
    let correos=prompt("Dime un correo");
    if(nombres!="" && teléfonos!="" && correos!=""){
        contactos.push({nombre : nombres, teléfono : teléfonos, correo : correos});
        console.log("Añadir nuevo contacto.\nHas introducido los siguientes datos:\nNombre: "+ nombres + "\nTeléfono: " + teléfonos + "\nCorreo: " + correos);
        document.write("<h1>Añadir nuevo contacto.</h1><p>Has introducido los siguientes datos:<br><b>Nombre:</b> "+ nombres + "<br><b>Teléfono:</b> " + teléfonos + "<br><b>Correo:</b> " + correos+"</p>");
    }
}