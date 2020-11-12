document.querySelector("#btnSeccionLogin").addEventListener("click", login);
document.querySelector("#btnSeccionRegistrarse").addEventListener("click", registrarse);
document.querySelector("#btnSeccionInicio").addEventListener("click", inicio);
document.querySelector("#btnIngresar").addEventListener("click", loginAdmin);
document.querySelector("#btnCerrarSesion").addEventListener("click", cerrarSesion);
document.querySelector("#btnCargarCotizacion").addEventListener("click", cargarCotizacion);
document.querySelector("#btnCargarRangos").addEventListener("click", mostrarInmuebleEnRango);


function cerrarSesion(){
  document.querySelector("#contenedorAdmin").style.display = "none";
  document.querySelector("#contenedor").style.display = "block";
ocultarSecciones()
}


function login() {
 ocultarSecciones()
  document.querySelector("#seccionLoginAdmin").style.display = "block";
}

function registrarse() {
  ocultarSecciones()
  document.querySelector("#seccionRegistro").style.display = "block";
}

function inicio() {
ocultarSecciones()
  document.querySelector("#btnSeccionInicio").style.display = "block";
}




function cargarCotizacion(){
  document.querySelector("#rangos").style.display = "none";
  
}











document.querySelector("#contenedorAdmin").style.display = "none";


function ocultarSecciones() {
  
  let secciones = document.querySelectorAll(".seccion");
  for (let i = 0; i < secciones.length; i++) {
    secciones[i].style.display = "none";
  }
}

ocultarSecciones()






function loginAdmin(){
  let nombre = document.querySelector("#usuario").value;
let apellido = document.querySelector("#contraseniaAdmin").value;
if((nombre !== "" && apellido !== "") && (nombre !== "" || apellido !== "") && (nombre ==="admin" && apellido ==="1234" )){
  ocultarSecciones();
  document.querySelector("#contenedorAdmin").style.display = "block"
  document.querySelector("#rangos").style.display = "block"
  document.querySelector("#contenedor").style.display = "none"
} else{
  
  alert("Complete los datos");
  ocultarSecciones();
}
}


 function registrarHuesped(){
let nombre = document.querySelector("#nombreHuesped").value;
let apellido = document.querySelector("#apellidoHuesped").value;
let correo = document.querySelector("#correoHuesped").value;
let celular = document.querySelector("#celularHuesped").value;
let huesped = new Huesped(nombre, apellido, correo, celular)
huespedes.push(huesped);
}

function registrarAnfitrion(){
  let nombre = document.querySelector("#nombreAnfitrion").value;
  let apellido = document.querySelector("#apellidoAnfitrion").value;
  let correo = document.querySelector("#correoAnfitrion").value;
  let celular = document.querySelector("#correoAnfitrion").value;
let anfitrion = new Anfitrion(nombre, apellido, correo, celular);
anfitriones.push(anfitrion);
} 




function cargarInmuebles(){

  for(let i = 0; i< inmuebles.length; i++){   

  document.querySelector("#publicaciones").innerHTML += `<h2>${inmuebles[i].titulo}</h2>
  <h4><strong>  ${inmuebles[i].precio} </strong> por noche</h4>
  <img src="/imagenes/${inmuebles[i].foto}" alt="hola">
  <div> <label><strong> ${inmuebles[i].ubi} </strong></label>
  <label class="duracion"> Promedio: <strong> ${inmuebles[i].promedio}</strong> </label>
  </div>
  <p> ${inmuebles[i].desc} </p>
  <p class="ver-mas"> Ver más... </p><hr>`

}
}

  
  



cargarInmuebles();
 

function cargarCotizacion(){

  let cotizacion = Number(document.querySelector("#cotizacion").value);
  let precioPesos;
  for(let i = 0; i< inmuebles.length; i++){
      precioPesos = cotizacion * inmuebles[i].precio;

  }


}