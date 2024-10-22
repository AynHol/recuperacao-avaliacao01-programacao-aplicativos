import Veiculo from "./Veiculo";

export default class Moto extends Veiculo{
    constructor(Nome: string, Modelo: string, Fabricante: string, anoFabricacao: number, placa: string, cilindrada: number){
        super(Nome,Modelo,Fabricante,anoFabricacao,placa)
        this.cilindrada = cilindrada
    }

    private cilindrada: number

    override mostrarDetalhes(){
        console.log("-----Detalhes-----")
        console.log(`Nome: ${this.Nome}`)
        console.log(`Modelo: ${this.Modelo}`)
        console.log(`Fabricante: ${this.Fabricante}`)
        console.log(`Ano de fabricacao: ${this.anoFabricacao}`)
        console.log(`Placa: ${this.placa}`)
        console.log(`Cilindradas: ${this.cilindrada}`)
    }
}