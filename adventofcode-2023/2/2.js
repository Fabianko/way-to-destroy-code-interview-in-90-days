const config = {
    "red": 12,
    "green": 13,
    "blue": 14,
}

function main() {
    const fs = require("fs");
    const path = require("path");
    const filePath = path.join(__dirname, "input.txt");
    const file = fs.readFileSync(filePath, "utf8");
    const lines = file.split(/\r?\n/);
    let resultado = 0;
    lines.forEach(line => {
        resultado += validate(line);
    });
    console.log(resultado);
    return resultado
}

// linea de ejemplo "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green" al sumar los valores de blue no pueden ser superiores a 12 segun config, lo mismo para green y red
function validate(line){

    let id = parseInt(line.split(":")[0].split(" ")[1])
    let arr = line.split(":")[1].split(";")
    let flag = false
    arr.forEach(element => {
        let arr2 = element.split(",")
        arr2.forEach(element2 => {
            let arr3 = element2.split(" ")
            if (arr3[2] == "blue" && parseInt(arr3[1]) > config.blue) {
                flag = true
            }
            else if (arr3[2] == "green" && parseInt(arr3[1]) > config.green) {
                flag = true
            }
            else if (arr3[2] == "red" && parseInt(arr3[1]) > config.red) {
                flag = true
            }
        });
    });
    if (flag) {
        return 0
    }
    return id
   
}

main()  // 1