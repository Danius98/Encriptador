const textoNormal = document.getElementById('normal');
const textoCodificado = document.getElementById('encriptado');
const encryptBtn = document.getElementById('encriptar');
const dencryptBtn = document.getElementById('desencriptar');

//me busca globalmente las letras en el texto
const encriptar = /a|e|i|o|u/g;

//de igual forma pero cunado está encriptado
const desencriptar = /ai|enter|imes|ober|ufat/g;


const encriptado = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}

const desencriptado = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
}

function multiReplace(strings, regex, replaces) {
    return strings.replace(regex, function(x) {
      // check with replaces key to prevent error, if false it will return original value
      return Object.keys(replaces).includes(x) ? replaces[x] : x;
    });
  }

function crypt(){
  var codificado = textoNormal.value.toLowerCase();
  var codificar = multiReplace(codificado, encriptar, encriptado);
  //alert(codificar)
  textoCodificado.innerHTML = codificar;
  textoNormal.value = "";
  textoCodificado.style.background = "none"
  }

/*if(textoCodificado.value.length > 10){
  textoCodificado.style.background = "none"
}*/

/*encryptBtn.addEventListener('click', () => {
  if(textoNormal.value.length){
    textoCodificado.innerHTML = multiReplace(frase, encriptar, encriptado);
    return textoCodificado;
  } else {
    alert("Ingresa texto para codificar")
  }
})*/