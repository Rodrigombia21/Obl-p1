class Admin {
    constructor(usuario, contraseña, id) {
        this.usario = usuario;
        this.contraseña = contraseña;
        this.id = id;

    }
}

class Huesped {
    constructor(usuario, contraseña, id, cantProp) {
        this.usario = usuario;
        this.contraseña = contraseña;
        this.id = id;
        this.cantProp = cantProp;
    }
}

class Anfitrion{
    constructor (id,nombre, apellido, correo, celular, usuario, contrasenia, propiedades){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.celular = celular;
        this.usuario = usuario;
        this.contrasenia = contrasenia;
        this.propiedades = propiedades;
        this.tipo = "anfitrion";
    }
}


class Inmueble {
    constructor(titulo, precio, foto, ubi, promedio, desc, id) {
        this.titulo = titulo;
        this.precio = precio;
        this.foto =foto;
        this.ubi = ubi;
        this.promedio = promedio;
        this.desc = desc;
        this.id = id;
    }
}