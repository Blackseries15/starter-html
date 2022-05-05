const idadePessoa = 19;

validarIdade(idadePessoa);

exibirResultCheckIdade(idadePessoa);







function exibirResultCheckIdade(idadePessoa){

    if (verificarMaiorIdade(idadePessoa)) {
        console.log("Maior de idade")

    } else {
        console.log("Menor de idade")
    }

}

function validarIdade(idadePessoa) {
    if (idadePessoa < 0) {
        throw "Idade Invalida"
    }

}

function verificarMaiorIdade(idadePessoa) {
    if (idadePessoa >= 18) {
        return true

    } else {
        return false
    }
}

