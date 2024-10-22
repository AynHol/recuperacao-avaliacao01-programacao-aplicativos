import Revendedora from "./Revendedora";
import read from 'readline-sync'

var revendendora = new Revendedora()

var opcao = 0
do {
    console.log("-------------Menu-------------")
    opcao = read.keyInSelect(["Cadastrar Veiculo", "Deletar Veiculo", "Buscar Veiculo"]) + 1
    switch (opcao) {
        case 1:
            revendendora.adicionarVeiculo()
            break
        case 2:
            revendendora.removerVeiculo()
            break
        case 3:
            revendendora.buscarVeiculoPelaPlaca()
            break
    }
} while (opcao !== 0)