function sumarNumeros(string) {
    
    let i = 0;
    let j = string.length-1;
    let numero1 = '';
    let numero2 = '';
    while( i < string.length) {
        if (is_numeric(string[i]) && numero1 == '') {
            numero1 = string[i];
           
        }
        else {
            i++
        }
        if (is_numeric(string[j]) && numero2 == '') {
            numero2 = string[j];
        }
        else{
            j--
        }
        
    }
    let resultado = parseInt(numero1 + numero2);
    return resultado;
}

function is_numeric(str){
    return /^\d+$/.test(str);
}
const dict = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight':'8',
    'nine': '9'
}

    


function returnTheFirstSpelledNumberInText(text, dict) {
    let i = 0;
    let j = 1;
    while (i < text.length) {
        if (is_numeric(text[i])) {
            return text[i];
        }
        while (j < text.length) {
            if (dict[text.substring(i,j)]) {
                return dict[text.substring(i,j)];
            }
            else {
                j++
            }
        }
        j = i+1;
        i++
    }
    return 0;
}
    
function returnTheEndSpelledNumberInText(text, dict) {
    let i = text.length;
    let j = text.length-1;
    while (i >= 0) {
        if (is_numeric(text[i])) {  
            return text[i];
        }
        while (j >= 0) {
            
            if (dict[text.substring(i,j)]) {
                return dict[text.substring(i,j)];
            }
            else {
                j--
            }
            
        }
        
        
        j = i-1;
        i--
        
    }
    return 0;
}

function Trebuchet() {
    const fs = require("fs");
    const path = require("path");
    const filePath = path.join(__dirname, "input.txt");
    const file = fs.readFileSync(filePath, "utf8");
    const lines = file.split(/\r?\n/);
    let resultado = 0;
    lines.forEach(line => {
        returnTheFirstSpelledNumberInText(line, dict);
        init = returnTheFirstSpelledNumberInText(line, dict)
        end = returnTheEndSpelledNumberInText(line, dict)
       
        resultado += parseInt(init+end);

    });
    return resultado;
    }

  
console.log(sumarNumeros("treb7uchet"))
console.log(Trebuchet())