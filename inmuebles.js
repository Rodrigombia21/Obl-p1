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


inmuebles = [new Inmueble(1,"Hotel Soro ", 'El establecimiento Soro Montevideo, Curio Collection By Hilton está ubicado en Montevideo, a 150 metros de la playa de los Pocitos, y cuenta con restaurante, centro de fitness y bar. También tiene habitaciones familiares, terraza, recepción 24 horas, servicio de habitaciones y consigna de equipaje.','Montevideo', 3190, 3.4,Foto),
new Inmueble(2,"Live Hotel Boutique", 'El Live Hotel Boutique ofrece alojamiento solo para adultos en Punta del Este, a 1,5 km de la playa Brava y a 3,3 de la playa de los Dedos y la playa Mansa. El establecimiento alberga un bar cafetería. Todas las habitaciones cuentan con TV de pantalla plana con canales por cable, bañera de hidromasaje y minibar.','Punta del Este',6290,5,Foto),
new Inmueble(3,"Caliu Earthship Hotel",'El Caliu Earthship Hotel se encuentra en Colonia del Sacramento, a 7 km de la Puerta de la Ciudadela de Colonia, y ofrece varias instalaciones, como un restaurante. El establecimiento se encuentra a 7 km de la calle de los Suspiros. Hay conexión WiFi gratuita y servicio de habitaciones.','Colonia',  5250, 4.4, Foto),
new Inmueble(4,"Las Cumbres Boutique Hotel",'Este hotel está situado a 10 km de la ciudad de Maldonado y a 5 km de la playa de Solanas. Ofrece piscina al aire libre, spa y vistas magníficas a la laguna y a las colinas. El establecimiento cuenta con habitaciones amplias y elegantes con conexión Wi-Fi gratuita.','Punta del Este',  4190, 4,  Foto),
new Inmueble(5,"Hotel Ciudadano Suites",'El Hotel Ciudadano Suites está bien ubicado en el barrio Tres Cruces de Montevideo, a 3 km de la playa de los Pocitos, a 3,3 km de la plaza de Cagancha y a 4,2 km de la plaza Independencia. Tiene restaurante, recepción 24 horas, servicio de habitaciones y WiFi gratuita en todas las instalaciones. Este hotel ofrece habitaciones familiares.', 'Montevideo',  4190, 4.1, Foto),
new Inmueble(6,"Hotel del Lago",'El Hotel del Lago Golf & Art Resort, situado en la zona del lago, ofrece partidas de golf gratuitas y alberga un restaurante. También hay un centro de spa y 10 pistas de tenis iluminadas. Este establecimiento ecológico se encuentra a 2 km del aeropuerto de Laguna del Sauce, a 3,3 km del Club de Playa Mansa y a 3,5 km de la playa de Solanas.','Punta del Este', 5250, 4.8, Foto),
new Inmueble(7,"Joan Miró Hotel",'El Joan Miró Hotel se encuentra en Punta del Este, a menos de 100 metros de la Playa Mansa. Ofrece bañera de hidromasaje, solárium y conexión WiFi gratuita.','Punta del Este', 6290, 4.9,  Foto),
new Inmueble(8,"Hotel El Diablo Chic",'El Diablo Chic, situado a solo 750 metros de La Viuda, ofrece alojamiento en Punta del Diablo con acceso a piscina al aire libre, jardín y recepción 24 horas. Este hotel también cuenta con piscina privada y conexión WiFi gratuita.', 'Rocha', 5390,4.6, Foto),
new Inmueble(9,"Hotel Narbona Wine Lodge", 'El Narbona Wine Lodge, situado en un viñedo, alberga una piscina al aire libre y un restaurante a la carta. Se halla en Carmelo, a solo 4 km de Puerto Camachi.', 'Colonia', 4190, 3.9, Foto),
new Inmueble(10,"Hotel Rivera",'El hotel se encuentra a 1 calle del puerto de Colonia del Sacramento. Ofrece conexión Wi-Fi gratuita en todo el establecimiento, así como habitaciones con aire acondicionado y patios o balcones privados.','Colonia', 3190,  3.7, Foto),
new Inmueble(11,"Kalá Hotel Boutique",'El Kalá Hotel Boutique tiene una piscina al aire libre, una bañera de hidromasaje al aire libre y una sauna. Se encuentra a 350 metros de la playa de Montoya y ofrece instalaciones de playa, como toallas de playa y tumbonas.', 'Punta del Este', 6490,  5, Foto),
new Inmueble(12,"BIT Design Hotel",'El BIT Design Hotel se encuentra en el distrito Punta Carretas de Montevideo y ofrece vistas panorámicas a la ciudad, elegantes habitaciones sofisticadas y conexión WiFi gratuita.','Montevideo', 6490, 4.8, Foto),
new Inmueble(13,"Hotel Il Belvedere",'Il Belvedere, situado junto a la playa de arena blanca de Punta del Este, ofrece 2 piscinas exteriores, restaurante y gimnasio. Sus bungalows independientes ofrecen WiFi gratuita y vistas al jardín o al mar.','Punta del Este',  4190, 4,  Foto),
new Inmueble(14,"Proa Sur Hotel",'Este establecimiento ofrece vistas panorámicas al mar y piscina cubierta y se encuentra en La Paloma, a 1,5 km de una parada de autobús. Alberga sauna y centro de fitness. Hay WiFi gratuita.','Rocha', 5250, 4.4,  Foto),
new Inmueble(15,"Hotel Cottage Puerto Buceo",'El Cottage Puerto Buceo se encuentra en Montevideo, a 650 metros de la playa de los Pocitos, y ofrece bar, aparcamiento privado, salón compartido y jardín. También cuenta con piscina cubierta, servicio de alquiler de bicicletas, recepción 24 horas, servicio de habitaciones y servicio de cambio de divisa.','Montevideo', 6290, 4.9, Foto),
new Inmueble(16,"Villa Toscana Boutique Hotel",'El Toscana ocupa una elegante villa de inspiración toscana situada a 5 minutos en coche de la playa de Solana. Ofrece piscina al aire libre, bañeras de hidromasaje privadas, pista de tenis y conexión WiFi gratuita.', 'Punta del Este', 5390, 4.2, Foto),
new Inmueble(17,"Hotel Costa Colonia",'Este hotel de última generación ofrece habitaciones con vistas a la tranquila ciudad de Colonia del Sacramento. También alberga varias instalaciones de ocio, como piscina al aire libre y spa de bienestar. Además, hay WiFi gratuita.', 'Colonia', 4190,3.9, Foto),
new Inmueble(18,"Hotel Casino Carrasco & Spa",'El Hotel Casino Carrasco & Spa Montevideo dispone de spa, gimnasio, piscina cubierta y piscina exterior. Ofrece habitaciones elegantes con conexión Wi-Fi gratuita y se encuentra a solo 5 minutos en coche del aeropuerto de Montevideo, en el barrio de Carrasco. El desayuno es gratuito para los menores de 12 años.','Montevideo', 6290,   5, Foto),
new Inmueble(19,"Hotel Dazzler",'El Dazzler se encuentra en Colonia del Sacramento, en el departamento de Colonia, y ofrece alojamiento frente a la playa con centro de spa. El alojamiento está situado a 20 km del parque nacional Anchorena y a 2,5 km del centro histórico de Colonia de Sacramento.','Colonia', 6490, 4.7, Foto),
new Inmueble(20,"Petit Chateau Hotel Boutique", 'Este hotel boutique ofrece una piscina climatizada al aire libre, WiFi gratuita y desayunos en Punta del Este. Las habitaciones del Petit Chateau Hotel Boutique, con vistas a la piscina o al jardín, incluyen TV de pantalla plana por cable, aire acondicionado y baño privado. El hotel proporciona servicio de habitaciones.','Punta del Este', 6490, 4.6, Foto),
new Inmueble(21,"The Grand Hotel", 'El The Grand Hotel se encuentra en Punta del Este, frente a la playa Brava y ofrece habitaciones con conexión WiFi gratuita y vistas fabulosas al mar. Este establecimiento ecológico alberga un spa y centro de bienestar con piscina cubierta, sauna y gimnasio.','Punta del Este', 3190,  3.9,Foto),
new Inmueble(22,"Hotel Hyatt Centric",'El Hyatt Centric Montevideo ofrece alojamiento en el bulevar Montevideo Oceanside, a 500 metros del World Trade Center de Montevideo, y cuenta con una piscina cubierta y un restaurante. Dispone de instalaciones de spa. Cuenta con WiFi gratuita.','Montevideo', 4190, 4,  Foto)
];


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
