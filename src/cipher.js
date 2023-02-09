const cipher = {
  encode: function(deslocamento, caixaTexto1){

    if (typeof deslocamento !== "number" || typeof caixaTexto1 !== "string" || caixaTexto1 === "" || deslocamento === "" || caixaTexto1 === 0 || deslocamento === 0){
      throw new TypeError;
    }
  
    let resultado = ""
    for(let i = 0 ; i < caixaTexto1.length ; i++){

      const posicao = caixaTexto1.charCodeAt(i);
      
      if (posicao >=65 && posicao <= 90){
        const letrasMaiusculas = ((posicao - 65 + deslocamento) % 26) + 65;
        resultado += String.fromCharCode(letrasMaiusculas);
      }

      if (posicao >= 97 && posicao <= 122){
        const letrasMinusculas = ((posicao - 97 + deslocamento) % 26) + 97;
        resultado += String.fromCharCode(letrasMinusculas); 
      }

      if ((posicao >= 32 && posicao <= 47) || (posicao >= 58 && posicao <= 64) || (posicao >= 91 && posicao <=96) || (posicao >= 123 && posicao <= 255)){
        resultado += caixaTexto1.charAt(i);
      }

    }
    return resultado
    
  },

  decode: function(deslocamento, caixaTexto1){
    
    if (typeof deslocamento !== "number" || typeof caixaTexto1 !== "string" || caixaTexto1 === "" || deslocamento === "" || caixaTexto1 === 0 || deslocamento === 0){
      throw new TypeError;
    }
    
    let resultado = ""
    for(let i = 0 ; i < caixaTexto1.length ; i++){
      
      const posicao = caixaTexto1.charCodeAt(i);

      if (posicao >=65 && posicao <=90 ){
        const letrasMaiusculas = ((posicao - 90 - deslocamento) % 26) + 90;
        resultado += String.fromCharCode(letrasMaiusculas);
      }

      if (posicao >= 97 && posicao <= 122){
        const letrasMinusculas = ((posicao - 122 - deslocamento) % 26) + 122;
        resultado += String.fromCharCode(letrasMinusculas); 
      }

      if ((posicao >= 32 && posicao <= 47) || (posicao >= 58 && posicao <= 64) || (posicao >= 91 && posicao <=96) || (posicao >= 123 && posicao <= 255)){
        resultado += caixaTexto1.charAt(i);
      }
      
    }
    return resultado

  }

};

export default cipher;