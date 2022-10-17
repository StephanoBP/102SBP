let contactos = [
    {nombre : "Maxwell Wright",teléfono : "(0191) 719 6495", correo : "Curabitur.egestas.nunc@nonummyac.co.uk"},
    {nombre : "Raja Villarreal",teléfono : "0866 398 2895", correo : "posuere.vulputate@sed.com"},
    {nombre : "Helen Richards",teléfono : "0800 1111", correo : "libero@convallis.edu"}
]
let booleanos=true;
let petición=0;
do{
    ++petición;
    do{
        opcion=String(prompt("Dime cual opción quieres elegir(1/2/3/4/5):\n1-Mostrar el primer contacto.\n2-Mostrar el último contacto.\n3-Mostrar todos los contactos.\n4-Añadir nuevo contacto.\n5-Salir del programa."));
        if(opcion.match(/\D/)||opcion==""||opcion.match(/\s/)||opcion<1||opcion>5){
            alert("Esta no es una opción permitida, repítalo de nuevo.");
        }else{
            booleanos=false;
        }
    }while(booleanos)
    if(opcion==1){
        document.write("<h1 style=\"color:white;\">Petición "+petición +": Mostrar el primer contacto.</h1><p style=\"color:white;\">")
        console.log("Petición "+petición +": Mostrar todos los contactos.\n"+contactos[0].nombre+" / " + contactos[0].teléfono+" / "+ contactos[0].correo);
        for(let a in contactos[0]){
            if(contactos[0][a]!=contactos[0].correo){
                document.write(contactos[0][a]+" / ");
            }else{
                document.write(contactos[0][a]);
            }
            
        }
        document.write("</p>");
        booleanos=true;
    }else if(opcion==2){
            console.log("Petición "+petición +": Mostrar todos los contactos.\n"+contactos[contactos.length-1].nombre+" / " + contactos[contactos.length-1].teléfono+" / "+ contactos[contactos.length-1].correo);
            document.write("<h1 style=\"color:white;\">Petición "+petición +": Mostrar el último contacto.</h1><p style=\"color:white;\">")
            for(let a in contactos[contactos.length-1]){
                if(contactos[contactos.length-1][a]!=contactos[contactos.length-1].correo){
                    document.write(contactos[contactos.length-1][a]+" / ");
                }else{
                    document.write(contactos[contactos.length-1][a]);
                }
                
            }
            document.write("</p>");
            booleanos=true;
    }else if(opcion==3){
        document.write("<h1 style=\"color:white;\">Petición "+petición +": Mostrar todos los contactos.</h1>");
        console.log("Petición "+petición +": Mostrar todos los contactos.");
        for(i=0;i<contactos.length;i++){
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
            booleanos=true;
        }    
    }else if(opcion==4){
        let nombres=prompt("Dime un nombre");
        let teléfonos=prompt("Dime un numero");
        let correos=prompt("Dime un correo");
        console.log("Petición "+petición +": Añadir nuevo contacto.\nHas introducido los siguientes datos:\nnombre: "+ nombres + "\nteléfono: " + teléfonos + "\ncorreo: " + correos);
        if(nombres!="" && teléfonos!="" && correos!=""){
            contactos.push({nombre : nombres, teléfono : teléfonos, correo : correos});
            document.write("<h1 style=\"color:white;\">Petición "+petición +": Añadir nuevo contacto.</h1><p style=\"color:white;\"> Has introducido los siguientes datos:<br>nombre: "+ nombres + "<br>teléfono: " + teléfonos + "<br>correo: " + correos+"</p>");
        }
        booleanos=true;
    }else if(opcion==5){
        console.log("Petición "+petición +":Salir del programa.\nHas salido correctamente del sistema, buen día.");
        document.write("<h1 style=\"color:white;\">Petición "+petición +": Salir del programa.</h1><p style=\"color:white;\">Has salido correctamente del sistema, buen día.</p>")
        booleanos=false;
    }
}while(booleanos);