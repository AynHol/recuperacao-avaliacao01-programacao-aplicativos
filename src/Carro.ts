import Veiculo from "./Veiculo";

export default class Carro extends Veiculo {
    constructor(Nome: string, Modelo: string, Fabricante: string, anoFabricacao: number, placa: string, cavalosPotencia: number){
        super(Nome,Modelo,Fabricante,anoFabricacao,placa)
        this.cavalosPotencia = cavalosPotencia
    }
    
    private cavalosPotencia: number

    override mostrarDetalhes(){
        console.log("-----Detalhes-----")
        console.log(`Nome: ${this.Nome}`)
        console.log(`Modelo: ${this.Modelo}`)
        console.log(`Fabricante: ${this.Fabricante}`)
        console.log(`Ano de fabricacao: ${this.anoFabricacao}`)
        console.log(`Placa: ${this.placa}`)
        console.log(`Cavalos: ${this.cavalosPotencia}`)
    }
}