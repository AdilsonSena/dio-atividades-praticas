function validaVetor(vet, num) {
    try{
        if (!vet && !num) throw new  ReferenceError("Vetor não definido");  
        if (typeof vet !== "object") throw new TypeError("Vetor deve ser um objeto");

        if (typeof num !== "number") throw new TypeError("Número deve ser um número");

        if (vet.length !== num) throw new RangeError("Tamanho maior que o tamanho do vetor!");

        return vet;
    }
    catch(err) {
        if (err instanceof ReferenceError) {
            console.log("Este erro é um erro de referência!");
            console.log(err.message);
        } else if (err instanceof TypeError) {
            console.log("Este erro é um erro de tipo!");
            console.log(err.message);
        } else if (err instanceof RangeError) {
            console.log("Este erro é um erro de range!");
            console.log(err.message);
        } else {
            console.log("Este erro é um erro desconhecido!");
            console.log(err.message);
        }
    }
}

console.log(validaVetor([1, 2, 3, 4, 5], 5));



