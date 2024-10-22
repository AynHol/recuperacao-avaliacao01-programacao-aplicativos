export default class Veiculo {
    constructor(Nome: string, Modelo: string, Fabricante: string, anoFabricacao: number, placa: string){
        this.Nome = Nome
        this.Modelo = Modelo
        this.Fabricante = Fabricante
        this.anoFabricacao = anoFabricacao
        this.placa = placa
    }

    public Nome: string
    public Modelo: string
    public Fabricante: string
    public anoFabricacao: number
    public placa: string

    public getPlaca(){
        return this.placa
    }

    public mostrarDetalhes(){
        console.log("-----Detalhes-----")
        console.log(`Nome: ${this.Nome}`)
        console.log(`Modelo: ${this.Modelo}`)
        console.log(`Fabricante: ${this.Fabricante}`)
        console.log(`Ano de fabricacao: ${this.anoFabricacao}`)
        console.log(`Placa: ${this.placa}`)
    }
}