//Atalhos drawImage(xI,yI,laI,alI,x,y,la,al);
        
        //MSG ENQUANTO CARREGA  

        var msg = document.getElementById('msg');
        //IMAGENS
        var fundoImg = new Image();fundoImg.src="IMG/piso.png";
        var NPC1 = new Image();NPC1.src="IMG/personagem1.png";
        var NPC2 = new Image();NPC2.src="IMG/personagem2.png";
        var Gravida = new Image();Gravida.src="IMG/gravida.png";
        var botao = new Image();botao.src="IMG/botao.png";
        var botoes = new Image();botoes.src="IMG/botoes.png";
        var item = new Image();item.src="IMG/itens.png";
        var rostos = new Image();rostos.src="IMG/rostos.png";
        var audio = new Image();audio.src="IMG/audio.png";
        //Canvas
        var canvas = document.getElementById("Janela");
        var ctx = canvas.getContext("2d");
        //VARIASVEIS GLOBAIS
        var frames=0;
        //EVENTOS
        addEventListener("keydown",function(e){gravida.tecladoComando(e);});
        addEventListener("keyup",function(e){gravida.Parar(e);});
        canvas.addEventListener("click",Clicar);
        window.onload=function carregado(){
            setTimeout(()=>{
                msg.style.display="none";
                canvas.style.display="inherit";
                canvas.style.animation="surgir 1.5s"
            },3000)
            // msg.style.display="none";
            // canvas.style.display="inherit";
        }
        
        //CLICKS COM COLISÕES 
        function Clicar(evt){
            //CONTA PARA QUE CONTE SOMENTE O CANVAS, TIRANDO A MARGIN
            var posX = evt.clientX-(window.innerWidth/2-canvas.width/2);
            var posY = evt.clientY-(window.innerHeight/2-canvas.height/2);
            console.log("Posição do clique: ", posX+","+posY);
            //EVENTOS DE CLICK PASSANDO O X E O Y

            //CLICKS PARA A TELA 1
            if(globais.nTela==1){
                //ABRIR INVENTARIO
                if(posY>440 && posX>850){
                    globais.nTela=2;
                }if(posY<=57 && posX<=57 && posX>10 && posY>10){
                    var player = document.querySelector("#audio1");
                    //O ÁUDIO N PAUSADO
                    if(!player.paused){
                        
                        player.pause();
                        fundo.botoes[1].xI=0;
                        fundo.botoes[1].yI=225;
                    }
                    //AUDIO PAUSADO
                    else{
                        fundo.botoes[1].yI=0;
                        player.play();
                        player.loop=true;
                        
                    } 
                }
                //CLICK PARA QUE A FALA TERMINE OU PASSE PARA A PRÓXIMA
                if(posY>400 && interagir.falaAceita.length>0 ){
                    if(interagir.pularfala==0 &&
                    interagir.falaAceita.length>=interagir.nFala &&
                    interagir.textoSeparado.length>interagir.indice){
                        
                        interagir.indice=interagir.textoSeparado.length-1;

                    }else if((interagir.indice)==interagir.textoSeparado.length && interagir.nFala+1<interagir.falaAceita.length){
                        interagir.pularfala=1;
                    }else if((interagir.indice)==interagir.textoSeparado.length && interagir.nFala+1==interagir.falaAceita.length){
                        interagir.pularfala=2;
                    }
                }
            }//CLICKS DA TELA 2
            if(globais.nTela==2){
                for(element of gravida.inventario){
                    if(element.x<posX && element.y<posY && element.x+68>posX && element.y+60>posY){
                        console.log(element);
                    }
                }
                if(posY>18 && posY<70 && posX>97 && posX<150){
                    globais.nTela=1;
                }
            }
        }
        //VARIÁVEIS
        var globais = {
            posicaoX:0,posicaoY:0,nTela:1,
            PegarItem:-1,desenhar:true
        }