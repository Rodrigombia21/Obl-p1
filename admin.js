class Administrador{
    constructor (usuario, contrasenia){
        this.usuario = usuario;
        this.contrasenia = contrasenia;
        this.tipo = "admin";
    }
}



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
  



function cargarCotizacion(){

    let cotizacion = Number(document.querySelector("#cotizacion").value);
    let precioPesos;
    for(let i = 0; i< inmuebles.length; i++){
        precioPesos = cotizacion * inmuebles[i].precio;
  
    }
  
  
  }

  function crearAnfitrion(){
       
    let id =0; 
    let propiedades = 0;
    let nombre = document.querySelector("#txtTitulo").value;
    let apellido = document.querySelector("#txtDescripcion").value;
    let correo = document.querySelector("#txtCiudad").value;
    let celular = document.querySelector("#txtTitulo").value;
    let usuario = document.querySelector("#imgInmueble").value;
    let contrasenia = document.querySelector("#imgInmueble").value;
    id++;
    propiedades++
    let anfitrionNuevo = new Anfitrion(nombre, apellido, correo, celular, usuario, contrasenia, id, propiedades )
    anfitriones.push(anfitrionNuevo);
     }
    


/* 
  function registrarAnfitrion(){
    let nombre = document.querySelector("#nombreAnfitrion").value;
    let apellido = document.querySelector("#apellidoAnfitrion").value;
    let correo = document.querySelector("#correoAnfitrion").value;
    let celular = document.querySelector("#correoAnfitrion").value;
  let anfitrion = new Anfitrion(nombre, apellido, correo, celular);
  anfitriones.push(anfitrion);
  } 
   */