var gravida={
    img:Gravida,
    al:191/5,la:95/5,x:400,y:200,
    alI:191,laI:95,xI:36,yI:11,nome:"Grávida de Taubaté",
    mGravida:0, movendo:false,
    inventario:[],
    

    esquerda:false,direita:false,cima:false,baixo:false,//variáveis de controle do movimento
    
    desenharInventario(){
        ctx.drawImage(botoes,82.5,10,735,480);
        //INVENTÁRIO
        if(gravida.inventario.length>0){
            for(var i=0;i<gravida.inventario.length;i++){
                let x=153;
                let y=131;
                const interX=60+104;//60 = o tamanho de cada espaço no inventario horizontal, 104 = largura do bloco
                const interY=37+89;//37 = o tamanho de cada espaço no inventario
                var element = gravida.inventario[i];
                //POSICIONANDO O ITEM NO INVETÁRIO
                switch(i){
                    case 0:
                        element.x=x;
                        element.y=y;
                        break;
                    case 1:
                        element.x=x+interX;
                        element.y=y;
                        break;
                    case 2:
                        element.x=x+(interX*2);
                        element.y=y;
                        break;
                    case 3:
                        element.x=x;
                        element.y=y+interY;
                        break;
                    case 4:
                        element.x=x+interX;
                        element.y=y+interY;
                        break;
                    case 5:
                        element.x=x+(interX*2);
                        element.y=y+interY;
                        break;
                    case 6:
                        element.x=x;
                        element.y=y+(interY*2);
                        break;
                    case 7:
                        element.x=x+interX;
                        element.y=y+(interY*2);
                        break;
                    case 8:
                        element.x=x+(interX*2);
                        element.y=y+(interY*2);
                        break;
                }

                armas.redimensionarItem(element.img,element.laI,element.alI,element.xI,element.yI,element.x,element.y,68,60);
                
                if(element.dano==0){
                    ctx.fillStyle="white";
                    ctx.beginPath();                         
                    ctx.arc(element.x+5, element.y-7, 10, 0, 2 * Math.PI, false);
                    ctx.fillStyle = "white"; 
                    ctx.fill();
                    ctx.stroke();
                    ctx.fillStyle="black";
                    ctx.textAlign = "center";
                    ctx.fillText(element.espaco,element.x+5,element.y,20);
                    ctx.textAlign = "left";
                }else{
                    ctx.fillStyle="green";
                    ctx.fillRect(element.x, element.y+66, 50*(element.vida/100), 5);
                    ctx.strokeRect(element.x, element.y+66, 52, 6);
                    
                }
                
            }
        }
    },        
    // DESENHRA A GRÁVIDA    
    desenhar(){
        
        ctx.drawImage(this.img,this.xI, this.yI,this.laI,this.alI,this.x, this.y,this.la,this.al);
        ctx.globalAlpha = 1.0;
        
        //Desenha os personagens que deverão ficar na frente da grávida, toda a lógica de programação
        npc.desenharNPCDepois();

    },

    tecladoComando(e){
        //BAIXO
        if(globais.nTela==0 || globais.nTela==2){
            var tecla = e.key;
            const comandoTecla = comandosTeclado[tecla];
            if(comandoTecla){
                comandoTecla()      
            }
            
        }
        return
    },
    // MOVER GRÁVIDA
    mover(){
        if(this.baixo && gravida.y<212.5 && interagir.falaAceita=="" && !colisao(-1,2,estadoTelaGame[globais.nTela].predios)){
            this.x-=0.5;
            this.y+=1;
            this.movendo=true;
        }else if(this.baixo && gravida.y>=212.5 && interagir.falaAceita=="" && !colisao(-1,2,estadoTelaGame[globais.nTela].predios)){
            globais.posicaoX+=0.5;
            globais.posicaoY-=1;
            this.movendo=true;
        }
        //DIREITA
        if(this.direita && gravida.x<425 && interagir.falaAceita=="" && !colisao(2,0.629,estadoTelaGame[globais.nTela].predios)){
            this.x+=1;
            this.y+=0.3145;
            this.movendo=true;
        }else if(this.direita && gravida.x>=425 && interagir.falaAceita=="" && !colisao(2,0.629,estadoTelaGame[globais.nTela].predios)){
            globais.posicaoX-=1;
            globais.posicaoY-=0.3145;
            this.movendo=true;
        }
        //CIMA
        if(this.cima && gravida.y>182.5 && interagir.falaAceita=="" && !colisao(1,-2,estadoTelaGame[globais.nTela].predios)){
            this.x+=0.5;
            this.y-=1;
            this.movendo=true;
        }else if(this.cima && gravida.y<=182.5 && interagir.falaAceita=="" && !colisao(1,-2,estadoTelaGame[globais.nTela].predios)){
            globais.posicaoX-=0.5;
            globais.posicaoY+=1;
            this.movendo=true;
        }
        //ESQUERDA
        if(this.esquerda && gravida.x>375 && interagir.falaAceita=="" && !colisao(-2,-0.629,estadoTelaGame[globais.nTela].predios)){
            this.x-=1;
            this.y-=0.3145;
            this.movendo=true;
        }else if(this.esquerda && gravida.x<=375 && interagir.falaAceita=="" && !colisao(-2,-0.629,estadoTelaGame[globais.nTela].predios)){
            globais.posicaoX+=1;
            globais.posicaoY+=0.3145;
            this.movendo=true;
        }
    },

    
    // ANIMA ELA DE ACORDO COM O FRAMES
    anima(){
        if (frames%30==0 && this.movendo) {
            this.mGravida++;
            switch (this.mGravida) {
                case 1:
                    this.xI=328;
                    this.yI=25;
                break;
                case 2:
                    this.xI=72;
                    this.yI=25;
                    this.mGravida=0;
                break;
            }
        }
        // ANIMAÇÃO QUANDO ELA TA PARADA -------------- movendo = false ;
        else if(frames%30==0 && this.movendo==false){
            this.mGravida++;
            switch (this.mGravida) {
                case 1:
                    this.yI=536;
                    this.xI=72;
                break;
                case 2:
                    this.xI=72;
                    this.yI=280;
                    this.mGravida=0;
                break;
            }
        } 
    },
    // MUDA O VALOR DESSA VARIÁVEL
    Parar(e){
        var tecla = e.keyCode;
        if(tecla == 40){
            this.baixo=false;
        }
        //DIREITA
        if(tecla == 39){
            this.direita=false;
        }
        //CIMA
        if(tecla == 38){
            this.cima=false;
        }
        //ESQUERDA
        if(tecla == 37){
            this.esquerda=false;
        }
        if(!this.esquerda && !this.direita && !this.cima && !this.baixo){
            gravida.movendo=false;
        }
    },
    
}