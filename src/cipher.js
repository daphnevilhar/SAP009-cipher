
const cipher = {
    encode: function(caixaTexto1, deslocamento){
        let resultado = ""
        for(var i = 0 ; i < caixaTexto1.length ; i++){
        let formula = ((caixaTexto1.charCodeAt(i) - 65 + deslocamento) % 26) +65;
        resultado += String.fromCharCode(formula);
        }
        return resultado
    },

    decode: function(caixaTexto1, deslocamento){
        let resultado = ""
        for(var i = 0 ; i < caixaTexto1.length ; i++){
        let formula = ((caixaTexto1.charCodeAt(i) - 65 - deslocamento) % 26) +65;
        resultado += String.fromCharCode(formula);
        }
        return resultado
    }

};

export default cipher;