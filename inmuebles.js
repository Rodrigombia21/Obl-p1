class Inmueble{
    constructor (id, titulo, descripcion, ciudad, precio, promedio, foto){
        this.id = id;
        this.titulo = titulo,
        this.descripcion = descripcion;
        this.ciudad = ciudad;
        this.precio = precio;
        this.promedio = promedio;
        this.foto = foto;
            
    }
} 



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
    
    


function cargarInmueblesInicio(){

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