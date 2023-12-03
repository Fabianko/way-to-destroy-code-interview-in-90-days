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
        resultado += validate2(line);
    });
    console.log(resultado);
    return resultado
}

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

function validate2(line){
    let id = parseInt(line.split(":")[0].split(" ")[1])
    let arr = line.split(":")[1].split(";")
    let flag = false
    let temp = {
        "blue": 0,
        "green": 0,
        "red": 0,
    }
    arr.forEach(element => {
        let arr2 = element.split(",")
        arr2.forEach(element2 => {
            let arr3 = element2.split(" ")
            if (arr3[2] == "blue") {
                if (parseInt(arr3[1]) > temp.blue){
                    temp.blue = parseInt(arr3[1])
                }
               
            }
            else if (arr3[2] == "green") {
                if (parseInt(arr3[1]) > temp.green){
                    temp.green = parseInt(arr3[1])
                }
                
            }
            else if (arr3[2] == "red") {
                if (parseInt(arr3[1]) > temp.red){
                    temp.red = parseInt(arr3[1])
                }
                
            }
        });
    });

    let result = temp.blue * temp.green * temp.red
    return result
}

main()  // 1