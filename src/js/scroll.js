
function scroll(params) {
    
    const slideContainer = document.querySelector('.imgSlide');
    const slideContainers = document.querySelector('.imgSlide2');
    const filtro = document.querySelector('.filtro');

    window.addEventListener('scroll', function(){
    
        let distancia = slideContainer.getBoundingClientRect().top; 
        if(distancia <= 0){
            slideContainers.classList.add('active');
            filtro.classList.add('active');
            slideContainers.style.backgroundAttachment= "fixed";
            
            
        
        }else{
                filtro.classList.remove('active');
                slideContainers.style.backgroundAttachment= "scroll";
            }
        });
}

export default scroll();

