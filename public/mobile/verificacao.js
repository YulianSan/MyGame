function deitado() {
    let altura = window.innerHeight;
    let largura = window.innerWidth;
    
    if(largura<altura && globais.podeDesenhar){
        globais.podeDesenhar=false
        document.getElementById("informaRodarCelular").style.display="inherit"
        canvas.style.display="none"
    }
    else if(largura>altura && !globais.podeDesenhar){
        globais.podeDesenhar=true
        canvas.style.display="inherit"
        document.getElementById("informaRodarCelular").style.display="none"
    }
}