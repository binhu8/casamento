export default class contador{
 constructor(dataFutura){
     this.dataFutura = dataFutura

    }
    get dataAtual(){
        return new Date()
    }
    get dataFuturaCasamento(){
        return new Date(this.dataFutura)
    }
    get diferencaDeTempo(){
        return this.dataFuturaCasamento.getTime() - this.dataAtual.getTime()
    }

    get dias(){
        return Math.floor(this.diferencaDeTempo / (24 * 60 * 60 * 1000))
    }
    get horas(){
       return Math.floor(this.diferencaDeTempo / ( 60 * 60 * 1000))
    }
    get minutos(){
       return Math.floor(this.diferencaDeTempo / (60 * 1000))
    }
    get segundos(){
       return Math.floor(this.diferencaDeTempo / 1000)
    }

    get total(){
        const dias = this.dias < 10? "0" + this.dias: this.dias
        const horas = this.horas % 24 < 10? "0" + this.horas % 24: this.horas % 24 
        const minutos = this.minutos % 60 < 10? "0"+this.minutos % 60: this.minutos % 60
        const segundos =  this.segundos % 60 < 10?   "0"+this.segundos % 60: this.segundos % 60 

        return [dias, horas, minutos, segundos]
    }
}