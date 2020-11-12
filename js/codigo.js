
function mostrarBotones(){
  let idBotonesInicio = this.getAttribute("btn");
  let idSeccionInicio ="";
   idSeccionInicio = idBotonesInicio.charAt(3).toLowerCase() + idBotonesInicio.substr(4);
  for(let i = 0; i < idSeccionInicio; i++){
   if(idSeccionInicio.charAt(i) === "a"){
     document.querySelector("#btnSeccionRegistrarse").style.display = "none";
   }
  }
}

mostrarBotones();
/*
   
 mostrarBotones("visitante");                                       //Muestra solamente botones que el visitante puede ver

function mostrarBotones(tipo) {                                  //Funcion que permite mostrar los botones de la seccion correspondiente
  document.querySelector(".btn").style.display = "none";
  document.querySelector("." + tipo).style.display = "block";
}
*/
/*

document.querySelector("#tblBusquedaInmueble").style.display = "none";        //Oculta la tabla de resultados de búsqueda 
document.querySelector(".btn").addEventListener("click", mostrarSeccion);    //Ejecuta a la funcion mostrarSeccion cada vez que da click en un boton de clase btn
*/

/*mostrarSeccion();  */    
/*                                                        //Invoca a la funcion llamada mostrarSeccion
function mostrarSeccion() {                                                    //Muestra el contenido de la seccion clickeada
  
  document.querySelector(".seccion").style.display = "none";
  document.querySelector("#aux").style.display = "none";
  
  
  let idBoton = this.getAttribute("id");                                                                                      //"btnSeccionInicio"
  if (idBoton === undefined) {
    idBoton = "btnSeccionInicio";
  
  }
  let idSeccion = idBoton.charAt(3).toLowerCase() + idBoton.substr(4);                  //"seccionInicio"
  
  
  document.querySelector("#" + idSeccion).style.display = "block";
  
}

*/
/*
document.querySelector(".btnAux").addEventListener("click", mostrarSubMenu);   //Ejecuta la funcion mostrarSubMenu cada vez que da click en un boton de clase btnAux

function mostrarSubMenu() {                                                   //Funcion que muestra el sub menú 
  
  document.querySelector(".seccion").style.display = "none";                   //Oculta las secciones
  let idAux = this.getAttribute("id");                                            
  let idSeccionAux = idAux.charAt(3).toLowerCase() + idAux.substr(4);        
  document.querySelector("#" + idSeccionAux).style.display = "block";

}


document.querySelector(".btnSeccionGestion").addEventListener("click", mostrarMenuAlt);  //Ejecuta la funcion mostrarMenuAlt
*/
/*
function mostrarMenuAlt(){                         //Funcion que muestra el sub menu
    document.querySelector("#aux").style.display = "block"
    
}


document.querySelector("#btnLogin").addEventListener("click", verificarLogin);        //Ejecuta la funcion verificarLogin


document.querySelector("#btnSeccionCerrar").addEventListener("click", cerrarSesion);      //Ejecuta la funcion cerrarSesion



function cerrarSesion(){                          //Funcion que cierra sesion, habilitando la vista solo del visitante
mostrarBotones("visitante");
/*mostrarRecetasInicio();*/                           //Invoca a la funcion mostrarRecetasInicio
/*
document.querySelector("#seccionInicio").style.display = "block"

}

/*
function verificarLogin(){                        //Funcion que verifica qué tipo de usuario entra al sistema con sus correspondientes datos
  
  let usuario = document.querySelector("#txtUsuario").value;         
  let contrasenia = document.querySelector("#txtContrasenia").value;
  let login=false;
  for(let i=0; i<administradores.length; i++){
  if(administradores[i].usuario === usuario && administradores[i].contrasenia === contrasenia && administradores[i].tipo === "admin"){

    alert("Bienvenido Administrador!!");
    mostrarBotones(administradores[i].tipo);                            
    document.querySelector("#btnSeccionLogin").style.display = "none";
    document.querySelector("#seccionLogin").style.display = "none";
    document.querySelector("#seccionInicio").style.display = "block";
    document.querySelector("#auxSeccionAltaAnfitrion").style.display = "block";
    document.querySelector("#seccionGestion").style.display = "block";
    document.querySelector("#seccionReporte").style.display = "block";
    login=true;
  }
  }

  for(let i=0; i<anfitriones.length; i++){
    if(anfitriones[i].usuario === usuario && anfitriones[i].contrasenia === contrasenia && anfitriones[i].tipo === "anfitrion"){
      alert("Bienvenido Anfitrión!!");
      mostrarBotones(anfitriones[i].tipo);                                        //Muestra botones en la vista de anfitriones
      document.querySelector("#btnSeccionLogin").style.display = "none";
      document.querySelector("#seccionLogin").style.display = "none";
      document.querySelector("#seccionInicio").style.display = "block";
      document.querySelector("#auxSeccionAltaAnfitrion").style.display = "none";
      login=true;
      
      break;
    }
  }
  if(!login){//Error si los datos son incorrectos
    alert("Datos incorrectos!!");
  }
}*/