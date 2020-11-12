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


let huespedes = [
    new Huesped (1, "Tomas", "Ruglio", "tomasruglio@gmail.com", "12345678", "tomasruglio", "Tomasruglio1", ""),
    new Huesped (2, "Rodrigo", "Dominguez", "rodrigodominguez@gmail.com", "12345678", "rodrigodominguez", "Rodrigodominguez1", ""),
    new Huesped (3, "Rodrigo", "Viola", "rodrigoviola@gmail.com", "12345678", "rodrigoviola", "Rodrigoviola1", ""),
]
