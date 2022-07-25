// Solução 1:
function verificarPalindromo(palavra) {
    if (!palavra) return "palavra inexistente";

    return palavra.split("").reverse().join("") === palavra;
}

// Solução 2:
// ovo -> true
// 012

function verificarPalindromo(palavra) {
    if (!palavra) return "palavra inexistente";

    let palavraInvertida = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }

    return palavraInvertida === palavra;
}

console.log(verificarPalindromo("ele"));
