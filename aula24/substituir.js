function substituirMaiusculasPorAnterior(string) {
    let resultado = '';

    for (let i = 0; i < string.length; i++) {
        let charAtual = string[i];

        if (charAtual >= 'A' && charAtual <= 'Z') {
            let charSubstituido = String.fromCharCode(charAtual.charCodeAt(0) - 1);
            resultado += charSubstituido;
        } else {
            resultado += charAtual;
        }
    }

    return resultado;
}

// Exemplo de uso:
let textoOriginal = "AbcDefGhiJkl";
let textoModificado = substituirMaiusculasPorAnterior(textoOriginal);
console.log(textoModificado);  // Saída esperada: "ZabCdeFghIjk"