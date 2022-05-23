const usuario = {
    username: 'juan.perez',
    password: 'loremipsumpwd123',
    lovesJavascript: true,
    favoriteNumber: 42
};

let cosa = 'password'

console.log(cosa)
console.log(usuario.username)
console.log(usuario['username'])
console.log(usuario[cosa])
console.log(usuario.password)
console.log(usuario.lovesJavascript)
console.log(usuario.favoriteNumber)

const nuevoUsuario = {
    esNuevo: true,
    username: 'casa'
}

console.log(nuevoUsuario['esNuevo'])

const loveJSString = 'lovesJavascript';

console.log(nuevoUsuario['username'])
console.log(nuevoUsuario['username'])
nuevoUsuario.username = 'otro.nombre.de.usuario';
nuevoUsuario['password'] = '12345';
nuevoUsuario[loveJSString] = true;

console.log(nuevoUsuario['username'])
console.log(nuevoUsuario['password'])
console.log(nuevoUsuario[loveJSString])

const nuevoObjeto = {
    eliminarEstaPropiedad: true,
    casa: 'numero',
};

console.log(nuevoObjeto)
console.log(nuevoObjeto.eliminarEstaPropiedad)

delete nuevoObjeto.eliminarEstaPropiedad;

console.log(nuevoObjeto)
console.log(nuevoObjeto.eliminarEstaPropiedad)

const newObjeto = {
    decirHola: function() {
        return 'Hola a todo el mundo!';
    }
}

newObjeto.decirHola()
console.log(newObjeto.decirHola())

const user = {
    username: 'juan.perez',
    password: 'loremipsum123',
    lovesJavascript: true,
    favoriteNumber: 42
};

for(let key in usuario){
    console.log(key);
    console.log(user[key])
}

const usero = {
    username: 'juan.perez',
    password: 'loremipsumpwd123',
    lovesJavascript: true,
    favoriteNumber: 42,
    decirHola: function(){
        console.log( this.username + ' manda saludos!');
        console.log(this)
    }
};

usero.decirHola()

this.a = 37;

console.log(this.a)

var o = {
    prop: 37,
    f: function() {
      return this.prop;
    }
  };

console.log(o)
console.log(o.f);
console.log(o.f())

var a = {prop: 37};

function logea(){
    return this.prop
}

console.log(a.prop);
console.log(logea())

o.f = logea;

console.log(o.f());

var obj = {
    nombre: 'Objeto',
    log: function(){
        this.nombre = 'Cambiado';
        console.log(this)

        var cambia = function(str){
            this.nombre = str;
        }

        cambia('Hola!');
        console.log(this)
    }
}

console.log(obj)
console.log(obj.nombre)
console.log(obj.log())
console.log(obj.cambia)
console.log(obj.nombre)

var obk = {
    nombre: 'Objeto',
    log   : function(){
      this.nombre = 'Cambiado'; // this se refiere a este objeto, a `obj`
      console.log(this); // obj
  
      var that = this; // Guardo la referencia a this
  
      var cambia = function( str ){
        that.nombre = str;  // Uso la referencia dentro de esta funcion
      }
  
      cambia('Hoola!!');
      console.log(this);
    }
  }

console.log(obk)
console.log(obk.nombre)
console.log(obk.log())
console.log(obk)

function agregarPropiedad(objeto, property) {
    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    // Devuelve el objeto
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
    // Tu código: 
    /*objeto[property] = null;
    return objeto;*/
    property[objeto] = null;
    return property
  }

console.log(agregarPropiedad('cosa', 'casa'))

var usua = {
    amigos: []
}
function agregarAmigo(usua, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:
    console.log(usua)
    console.log(usua['amigos'])
    usua.amigos.push(nuevoAmigo);
    console.log(usua['amigos'])
    return usua
  }

console.log(agregarAmigo(usua, "Carlos"))

var ushuaia = [{usaca: "Jose", esPremium: false},{usaca: "john", esPremium: false},{usaca: "jose", esPremium: false}]

function pasarUsuarioAPremium(ushuaia) {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
    console.log(ushuaia)
    for(var i = 0; i < ushuaia.length; i++) {
      ushuaia[i].esPremium = true;
    }
    return ushuaia;
  }

console.log(ushuaia)
console.log(pasarUsuarioAPremium(ushuaia))


var liker = {
  posts: [{post: 1, likes: 4}, {post: 2, likes: 4}, {post: 3, likes: 4}]
}

function sumarLikesDeUsuario(liker) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var suma = 0;
  console.log(suma)
  console.log(liker)
  console.log(liker.posts.likes)
  for(var i = 0; i < liker.posts.length; i++){
    suma = suma + liker.posts[i].likes
  }
  console.log(suma)
  return suma
}

console.log(sumarLikesDeUsuario(liker))

var producto = {
  precio: 10,
    porcentajeDeDescuento: 5,
   };

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  console.log(producto)
  producto.calcularPrecioDescuento = function() {
    return this.precio - ( this.precio * this.porcentajeDeDescuento );
  };
  console.log(producto)
  return producto;

}

console.log(agregarMetodoCalculoDescuento(producto))

const producto4 = "Monitor 24\"";

console.log(producto4);

