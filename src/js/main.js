let alerta = document.querySelector('.alerta')

function pegarApi(url){
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send();
    return request.responseText

}

function atualizarApi(url){
    let request = new XMLHttpRequest();
    request.open('PUT', url, false);
    request.send();

}


function mostraNaPage(element, button, corButton){
    let card = document.querySelector('#cardList')
    
    let row = `<div class="row">
                    <div class="icon">
                        <img src="./src/images/icons-lista/${element.id}.svg" alt="Jogo de facas">
                    </div>
                    <div class="item">
                        <p>
                            ${element.nome}
                        </p>
                    </div>
                    <button style="background: ${corButton}" class="choose">
                        <p >${button}</p>
                    </button>
                </div>`

    
    card.innerHTML += row
   
    

}

function main(){
    let data = pegarApi('https://fabiogabriela.herokuapp.com/')
    
    let lista = JSON.parse(data)
    
    lista.forEach((element) => {
        if(element.total <= 0){
            console.log('estoque de', element.nome, ' zerado')
          
            mostraNaPage(element,"Indisponível", "grey")
        }else{
            mostraNaPage(element,"Disponível", "red")
        }

       
        // console.log(element)
    });

    let button  = document.querySelectorAll('.choose');
    
    button.forEach((element,index) => {
        element.addEventListener('click', ()=>{
            let button  = document.querySelectorAll('.choose');

            
           

            element.style.background = "green"
            element.innerHTML = "<p>Selecionado</p>"

            alerta.classList.add('active')
            setTimeout(function(){
                alerta.classList.remove('active')
                atualizarApi(`https://fabiogabriela.herokuapp.com/${index + 1}`)
            },2500)
        })
    })
    
}


setInterval(function(){
    window.location.reload(1);
 }, 10000);
main()