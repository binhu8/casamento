import Contador from './contador.js';
import Verificador from './scroll.js'

const tempoParaCasamento = new Contador('30 may 2021 11:30:00 GMT-0300')
let cardTempo = document.querySelectorAll('.resposta')

function atualizarTempo() {
    tempoParaCasamento.total.forEach(function(element, index){
        cardTempo[index].innerText = element
    })
    
    
}
setInterval(atualizarTempo, 1000)
Verificador()