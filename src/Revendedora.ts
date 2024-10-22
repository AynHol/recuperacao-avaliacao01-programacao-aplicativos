import Carro from "./Carro";
import Moto from "./Moto";
import Veiculo from "./Veiculo";
import read from 'readline-sync'

export default class Revendedora{
    private veiculos: Veiculo[] = []

    public save(veiculo: Veiculo){
        this.veiculos.push(veiculo)
        console.log("Veiculo cadastrado com sucesso")
    }
    
    public adicionarVeiculo(){
        var nome = read.question("Nome: ")
        var modelo = read.question("Modelo: ")
        var fabricante = read.question("Fabricante: ")
        var anoDFabricacao = read.questionInt("Ano de Fabricacao: ")
        var placa = read.question("Placa: ")
        var tipo = read.keyInSelect(["Carro", "Moto"]) +1

        if(tipo ===1){
            var cavalos = read.questionInt("Cavalos: ")
            var carro = new Carro(nome,modelo,fabricante,anoDFabricacao,placa,cavalos)
            this.save(carro)
        } else {
            var cilindrad = read.questionInt("Cilindradas: ")
            var moto = new Moto(nome,modelo,fabricante,anoDFabricacao,placa,cilindrad)
            this.save(moto)
        }
    }

    public removerVeiculo(){
        console.log("-----Deletar Veiculo-----")
        var numeroPlaca = read.question("Digite o numero da placa do veiculo: ")

        for (var i = 0; i < this.veiculos.length; i++) {
            if (numeroPlaca === this.veiculos[i].getPlaca()) {
                this.veiculos.splice(i,1)
                console.log(`Veiculo com placa ${numeroPlaca} foi excluido com sucesso!`)
                return
            }
        }
        console.log(`Não encontrado nehum carro com essa placa: ${numeroPlaca}!`)
    }

    public buscarVeiculoPelaPlaca(){
        var placaveiculo = read.question("Digite a placa: ")
        var pesquisa = this.veiculos.findIndex(placa => placa.getPlaca() === placaveiculo)
        console.table(this.veiculos[pesquisa])
    }

    public mostrarDetalhes(){
        console.table(this.veiculos)
    }
}
