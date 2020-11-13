class Huesped{
    constructor (id, nombre, apellido, correo, celular, usuario, contrasenia, propiedades){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.celular = celular;
        this.usuario = usuario;
        this.contrasenia = contrasenia;
        this.propiedades = propiedades;
        this.tipo = "huesped";
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
    