function trocarPares(vetor) {
    if (!vetor) return -1;
    if (!vetor.length) return -1;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === 0) {
            console.log("Você já é zero!");
        } else if (vetor[i] % 2 === 0) {
            console.log(`Trocando ${vetor[i]} por 0...`);
            vetor[i] = 0;
        }
    }

    return vetor;
}

let vetor = [1, 3, 4, 6, 80, 33, 23, 90, 100, 200];
console.log(trocarPares(vetor));
//console.log(trocarPares(null));
//console.log(trocarPares(undefined));
//console.log(trocarPares(false));
