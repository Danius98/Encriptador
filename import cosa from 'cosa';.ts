import cosa from 'cosa';
const producto = 'Monitor 20 Pulgadas ';
const precio = '30 USD';

console.log(producto.length); // Conocer la extensión de una cadena, length es de los muy pocos métodos que no usan () y es más que nada porque no es un método como tal sino una propiedad.

// IndexOf
console.log(producto.indexOf("Pulgadas")) // Nos dirá que posición tiene el texto en caso de encontrarlo
console.log(producto.indexOf('Tablet')); // -1 Significa que no lo pudo encontrar

// Includes
console.log(producto.includes('Monitor')); // Conocer si un texto existe
console.log(producto.includes('monitor')); // Conocer si un texto existe

const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

console.log(producto.concat(' En Descuento')); // Concactenar un string
console.log(producto.concat(` $${precio}`)); // Concactenar una variable

// Otras formas de concatenar:
console.log(producto + precio); 
console.log(producto +  "Con un precio de " +precio); 
console.log("El Producto" + producto +  " tiene un precio de " + precio); // Esta forma se puede complicar
console.log("El Producto" , producto ,  " tiene un precio de ",  precio); // Otra forma

// ES6 trajo consigo una mejor forma de concatenar variables que es con algo llamado Template String o template literal

console.log(`El Producto ${producto} tiene un precio de ${precio}`);

const producto2 = '        Monitor 20 Pulgadas      '; 


console.log(producto2);
console.log(producto2.length);

// Eliminar el inicio
console.log(producto2.trimStart().length); // Elimina todos los espacios en blancos del inicio
console.log(producto2.trimEnd().length); // Elimina todos los espacios en blancos del final

// Los métodos en javaScript se pueden encadenar, es decir, colocarse uno junto al otro
console.log(producto2.trimStart().trimEnd() ); // Cortar en ambas direcciones

// Un método (que ya tiene rato ) es trim que hace lo mismo
console.log(producto2.trim().length);

// En este video estaremos viendo 3 métodos más .replace, .slice y .repeat

// Replace 
const equipo = 'America de Cali es un equipo de la B';
console.log(equipo)
const equipo2 = equipo.replace("America de", "Deportivo ")
console.log(equipo2)
const equipo3 = equipo2.replace("es un equipo de la B", " Ganará la Libertadores")
console.log(equipo3)
console.log(equipo.replace("America de Cali es un equipo de la B", "Deportivo Cali ganara la Libertadores"));
console.log(producto.replace('Monitor', 'Televisor'));

// Slice te va a permitir extraer una parte de una cadena
console.log( producto.slice(0, 10)); // Iniciar en 0 y cortar hasta 10
console.log(producto.slice(8));// Cortar desde el 8 hasta el fin
console.log(producto.slice(2, 10)); // cortar desde 2 hasta el 10

console.log(producto.slice(2,1)); // Si el primer número es mayor, no va a cortar hacia atras...

// Existe uno similar a Slice que se llama substring
console.log( producto.substring(0, 10) );

console.log( producto.substring(2, 1) );  // Si el número es mayor al segundo, va a cortar hacia atras (voltear los números)
const producto3 = producto.substring(2, 1)
console.log(producto3)
// Si has visto algunos sitios web muestran tu primer letra de tu nombre:

const nombre = "Juan";
console.log(nombre.substring(0,1));
console.log(nombre.charAt(0));

const texto = 'en Promoción '.repeat(3)
console.log(producto.repeat(3));
console.log(producto.repeat(2.2)); // va a redondear a entero
console.log(`${producto} ${texto} !!!`);
 


// Split, dividir un string
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" "));
console.log(equipo.split(" "));


const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));

console.log(producto.toUpperCase());
console.log(producto.toLocaleLowerCase());

const email = "CORREO@CORRE.COM";
console.log(email.toLocaleLowerCase());

const precio = 300;
console.log(precio);
console.log(precio.toString())

const precio2 = precio.toString()
console.log(precio2)


var crypt = "La cosa esta muy dura"

