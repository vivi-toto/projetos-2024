// let myString = "Uma string qualquer";

// console.log(myString.match(/[a-zA-Z]/g));

// console.log(myString.slice(0, 10))

// let umaString = "o rato roeu a roupa do rei de roma";
// console.log(umaString.replace(/r/g, "#"));

function StringChanges(str) { 
    str = "abNcdN"; 
       for (let i=0; i <= str.length; i++) {
        let letterOneRegex = /N/;
        console.log(letterOneRegex)
       }
        
        return str; 
               
      }
      
      export default StringChanges;