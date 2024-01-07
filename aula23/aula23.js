let varA = 'A';
let varB = 'B';
let varC = 'C';

// varA = 'B';
// varB = 'C';
// varC = 'A';

/* const varTempA = varA
varA = varB; // varA = 'B'
varB = varC; // varB = 'C'
varC = varTempA; // varC = 'A' */

//outra forma de ser fazer:
[varA, varB, varC] = [varB, varC, varA]

console.log(`o valor atual de varA é ${varA}`)
console.log(`o valor atual de varB é ${varB}`)
console.log(`o valor atual de varC é ${varC}`)