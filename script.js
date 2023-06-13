const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia =document.querySelector(".copiar");
copia.style.display = "none"

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador =  textoEscrito.match(/^[a-z]*$/);


    if(!validador || validador === 0) {
        alert("solo son permitidas letras minusculas y sin acentos")
        location.reload();
        return true;
    
    }
}

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    if(!validarTexto()) {
    const textoEncriptador = encriptar(textArea.value)
    mensaje.value = textoEncriptador
    mensaje.style.backgroundImage = "none"
    textArea.value = "";
    copia.style.display = "block"
    mensaje.style.backgroundImage = "none"
    }
}

function encriptar(stringEncriptada){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    }
    return stringEncriptada
    
}

function btnDesencriptar(){
    const textoEncriptador = desencriptar(textArea.value)
    mensaje.value = textoEncriptador
    textArea.value ="";

}

function desencriptar(stringDesencriptada){
    let matrizcodigo = [["e", "enter"], ["i","ines"],["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringDesencriptada.includes(matrizcodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1] , matrizcodigo[i][0])
        }

        }

        return stringDesencriptada
    }

    function copiar(){
        mensaje.select();
        navigator.clipboard.writeText(mensaje.value)
        mensaje.value = "";
        alert("texto copiado")
    }
        
    

    

