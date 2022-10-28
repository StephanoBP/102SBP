//Matriz Contactos
let contactos = [
    {nombre: "Maxwell Wright",teléfono: "(0191) 719 6495", correo: "Curabitur.egestas.nunc@nonummyac.co.uk"},
    {nombre: "Raja Villarreal",teléfono: "0866 398 2895", correo: "posuere.vulputate@sed.com"},
    {nombre: "Helen Richards",teléfono: "0800 1111", correo: "libero@convallis.edu"}
]
//Funciones
let booleanos=true;
let petición=0;
function showContact(listaContactos,índice){
    if(listaContactos instanceof Array){
        document.write("<p>"+listaContactos[índice].nombre+" / " + listaContactos[índice].teléfono+" / "+ listaContactos[índice].correo+"</p>");
        console.log(listaContactos[índice].nombre+" / " + listaContactos[índice].teléfono+" / "+ listaContactos[índice].correo);
    }else{
        console.log("La lista de contactos introducida no es un array.");
        document.write("<p>La lista de contactos introducida no es un array.</p>");
    }
    booleanos = true;
}
function showAllContacts(listaContactos){
    document.write("<h1>Petición "+petición +": Mostrar todos los contactos.</h1>");
    console.log("Petición "+petición +": Mostrar todos los contactos.");
    if(listaContactos instanceof Array){
        for(let i=0;i<listaContactos.length;i++){
            document.write("<p>"+listaContactos[i].nombre+" / " + listaContactos[i].teléfono+" / "+ listaContactos[i].correo+"</p>");
            console.log(listaContactos[i].nombre+" / " + listaContactos[i].teléfono+" / "+ listaContactos[i].correo);
        }     
    }else{
        console.log("La lista de contactos introducida no es un array.");
        document.write("<p>La lista de contactos introducida no es un array.</p>");
    }
    booleanos = true;
}
function addNewContact(listaContactos,nombres,teléfonos,correos){
    if(nombres!="" && teléfonos!="" && correos!="" && listaContactos instanceof Array){
        contactos.push({nombre : nombres, teléfono : teléfonos, correo : correos});
        console.log("Petición "+petición +": Añadir nuevo contacto.\nHas introducido los siguientes datos:\nNombre: "+ nombres + "\nTeléfono: " + teléfonos + "\nCorreo: " + correos);
        document.write("<h1>Petición "+petición +": Añadir nuevo contacto.</h1><p> Has introducido los siguientes datos:<br><b>Nombre:</b> "+ nombres + "<br><b>Teléfono:</b> " + teléfonos + "<br><b>Correo:</b> " + correos+"</p>");
    }else{
        console.log("La lista de contactos introducida no es un array.");
        document.write("<p>La lista de contactos introducida no es un array.</p>");
    }
    booleanos=true;
}
function sortContacts(listaContactos){
    let orden=new String();
    booleanos=true;
    do{
        orden=String(prompt("¿De qué forma quieres ordenar la lista?(1/2/3)\n1-Por el nombre.\n2-Por el teléfono.\n3-Por el correo."));
        if(orden.match(/\D/)||orden==""||orden.match(/\s/)||orden<1||orden>3){
            alert("Esta no es una opción permitida, repítalo de nuevo.");
        }else{
            booleanos=false;
        }
    }while(booleanos);
    console.log("Petición "+petición +": Ordenar la lista.");
    document.write("<h1>Petición "+petición +": Ordenar la lista.</h1>");
    if(orden==1){
        listaContactos = listaContactos.sort((a, b) => a.nombre.trim().toLowerCase().localeCompare(b.nombre.toLowerCase().trim()));
        console.log("Has ordenado la lista por el nombre.");
        document.write("<p>Has ordenado la lista por el nombre.");
    }else if(orden==2){
        listaContactos = listaContactos.sort((a, b) => a.teléfono.replace("("," ").replace(")"," ").trim().localeCompare(b.teléfono.replace("("," ").replace(")"," ").trim()));
        console.log("Has ordenado la lista por el teléfono.");
        document.write("<p>Has ordenado la lista por el teléfono.");
    }else if(orden==3){
        listaContactos = listaContactos.sort((a, b) => a.correo.toLowerCase().localeCompare(b.correo.toLowerCase()));
        console.log("Has ordenado la lista por el correo.");
        document.write("<p>Has ordenado la lista por el correo.");
    }
    return listaContactos;
}
//Fin funciones
do{
    ++petición;
    do{
        opcion=String(prompt("Dime cual opción quieres elegir(1/2/3/4/5/6):\n1-Mostrar el primer contacto.\n2-Mostrar el último contacto.\n3-Mostrar todos los contactos.\n4-Añadir nuevo contacto.\n5-Ordenar la lista.\n6-Salir del programa."));
        if(opcion.match(/\D/)||opcion==""||opcion.match(/\s/)||opcion<1||opcion>6){
            alert("Esta no es una opción permitida, repítalo de nuevo.");
        }else{
            booleanos=false;
        }
    }while(booleanos)
    if(opcion==1){
        document.write("<h1>Petición "+petición +": Mostrar el primer contacto.</h1><p>")
        console.log("Petición "+petición +": Mostrar  el primer contacto.");
        showContact(contactos,0);
    }else if(opcion==2){
        console.log("Petición "+petición +": Mostrar el último contacto.");
        document.write("<h1>Petición "+petición +": Mostrar el último contacto.</h1><p>")
        showContact(contactos,contactos.length-1);
    }else if(opcion==3){
        showAllContacts(contactos,contactos.length);
    }else if(opcion==4){
        let nombres=String(prompt("Dime un nombre"));
        let teléfonos=String(prompt("Dime un numero"));
        let correos=String(prompt("Dime un correo"));
        addNewContact(contactos,nombres,teléfonos,correos);
    }else if(opcion==5){
        contactos=sortContacts(contactos);
        booleanos=true;
    }else if(opcion==6){
        console.log("Petición "+petición +": Salir del programa.\nHas salido correctamente del sistema, buen día.");
        document.write("<h1>Petición "+petición +": Salir del programa.</h1><p>Has salido correctamente del sistema, buen día.</p>")
        booleanos=false;
    }
}while(booleanos);