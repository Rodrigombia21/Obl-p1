 admin = [new Admin("admin", "1234", 1)];


 huesped = new Huesped("Rodrigo", "Rodrigo1234", 1, 0);


 anfitriones = [new Anfitrion("Tomas", "Tomas1234", 1, 0)];


 inmuebles = [new Inmueble("hotel california",5000,'casa1.jpg', 'Montevideo', 3, 'Hotel lujo', 1),
              new Inmueble("hotel carrasco",3000,"casa2.jpg", 'Montevideo', 2,'hotel grande', 2 )]; 
             
             
 function mostrarInmuebleEnRango(){
let valorInicial =  Number(document.querySelector("#valorDesde").value);
let valorFinal =  Number(document.querySelector("#valorHasta").value);
               
    for(let i = 0; i< inmuebles;i++){
        if(valorInicial< inmuebles[i].precio && valorFinal > inmuebles[i].precio){
            cargarInmuebles();
        }
        else{
            alert("No hay inmuebles en este rango")
        }
    }

 }



 function crearInmueble(){
let id =0; 
let titulo = document.querySelector("#txtTitulo").value;
let desc = document.querySelector("#txtDescripcion").value;
let ciudad = document.querySelector("#txtCiudad").value;
let precio = document.querySelector("#txtTitulo").value;
let foto = document.querySelector("#imgInmueble").value;
id++;
let inmuebleNuevo = new Inmueble(titulo, desc, ciudad, precio, foto, id)
inmuebles.push(inmuebleNuevo);

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