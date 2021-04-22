

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


function mostraNaPage(element){
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
                    <button class="choose">
                        <p>Escolher</p>
                    </button>
                </div>`

    
    card.innerHTML += row
   
    

}

function main(){
    let data = pegarApi('http://localhost:3003/')
    
    let lista = JSON.parse(data)
    
    lista.forEach((element) => {
        mostraNaPage(element)
    });

    let button  = document.querySelectorAll('.choose');
    
    button.forEach((element,index) => {
        element.addEventListener('click', ()=>{
            atualizarApi(`http://localhost:3003/${index + 1}`)

            let data = pegarApi('http://localhost:3003/')
            let lista = JSON.parse(data)
    
            lista.forEach((element) => {
                mostraNaPage(element)
            });
        })
    })
    lista.forEach((element) => {
        if(element.escolhido == true){
            button[element.id -1].style.background = "grey"
            button[element.id -1].innerHTML = "<p>Escolhido</p>"
        }
    });
}

main()