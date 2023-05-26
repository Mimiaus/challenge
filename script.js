const textoEntrada = document.querySelector(".textoEntrada");
const textoSalida = document.querySelector(".textoSalida");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"





function botonEncriptar(){

    if(textoEntrada.value == ''){

    document.getElementsByClassName('rectangulo')[0].style.visibility = 'visible';
    document.getElementsByClassName('copiar')[0].style.display = 'none'; 
    textoSalida.value="";
    
}
    else{
      const textoEncriptado = encriptar(textoEntrada.value)
    textoSalida.value = textoEncriptado
    textoEntrada.value = "";
    document.getElementsByClassName('rectangulo')[0].style.visibility = 'hidden';
    document.getElementsByClassName('copiar')[0].style.display = 'block';  
    }

}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];  
    stringEncriptada = stringEncriptada.toLowerCase() 
    stringEncriptada = stringEncriptada.replace(/[0-9]/g, "");
    stringEncriptada = stringEncriptada.replace(/[À-ú]/g, "");
    stringEncriptada = stringEncriptada.replace(/[@!^&\/\\#,+()$~%.'":*?<>-_{}]/g, "");

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}



function botonDesencriptar(){

    if(textoEntrada.value == '')
    {
        document.getElementsByClassName('rectangulo')[0].style.visibility = 'visible';
        document.getElementsByClassName('copiar')[0].style.display = 'none'; 
        textoSalida.value="";
        
    }

    else{
        const textoEncriptado = desencriptar(textoEntrada.value)
        textoSalida.value = textoEncriptado
        textoEntrada.value = ""; 
        document.getElementsByClassName('rectangulo')[0].style.visibility = 'hidden';
        document.getElementsByClassName('copiar')[0].style.display = 'block';  
    }

    

}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];  
    stringDesencriptada = stringDesencriptada.toLowerCase()
    stringDesencriptada = stringDesencriptada.replace(/[0-9]/g, "");
    stringDesencriptada = stringDesencriptada.replace(/[À-ú]/g, "");
    stringDesencriptada = stringDesencriptada.replace(/[@!^&\/\\#,+()$~%.'":*?<>{}]/g, "");
    

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}

function botonCopiar(){
    var textoCopiado = document.querySelector(".textoSalida");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
}
