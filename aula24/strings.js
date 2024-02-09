// let myString = "Uma string qualquer";

// console.log(myString.match(/[a-zA-Z]/g));

// console.log(myString.slice(0, 10))

let umaString = "abNcdN";
let letraN = "N";
let resultado = " ";

for (i = 0; i < umaString.length; i++) {
    let charAtual = string[i];
    // let posicao = umaString.indexOf("N");
    if (charAtual = "N") {
        let charSubstituido = String.fromCharCode(charAtual.charCodeAt(0) - 1);
            resultado += charSubstituido;
        } else {
            resultado += charAtual;
        }
        // console.log(umaString.replace(/N/g," "))
    }


console.log(umaString);





// function StringChanges(str) { 
//     str = "abNcdN"; 
//        console.log(StringChanges.replace)
        
//         return str; 
               
//       }




