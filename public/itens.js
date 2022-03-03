//ITENS 
var armas={
    //DADOS NECESSÁRIOS PARA QUE CRIE UM ITEM NUM=SKIN , NOME=NOME DO ITEM,HIST:HISTÓRIA DO ITEM
    CriarArmamento(num,nome,x,y,dano,vida,hist){
        let itens={}
        if(num==1){
            //CRIA UM ITEM
            itens={
                img:item,nome:nome,x:x,y:y,dano:dano,
                xI:0,yI:0,laI:190,alI:220,
                vida:vida,al:22,la:19,historia:hist,espaco:1,nAnima:0
            }
        }
        if(num==2){
            itens={
                img:item,nome:nome,x:x,y:y,dano:dano,
                xI:205,yI:26,laI:36,alI:171,
                vida:vida,al:30,la:10,historia:hist,espaco:1,nAnima:0
            }
        }
        return itens
    },
    //CODIGO QUE DESENHA 
    desenharArmamento(armas){
        //CODIGO PARA GERAR UM ITEM
        globais.PegarItem=-1;
        
        for (let i in armas) {
            var element = armas[i];
            //DA UMA ANIMAÇÃO BÁSICA AUMENTANDO E DIMINUINDO O TAMANHO DO ITEM
            
            if(element.dano != 0){
                //#FFD700
                if(element.vida>60){
                    ctx.fillStyle = "#006400";
                }else if(element.vida>30){
                    ctx.fillStyle = "#FFD700";
                }else{
                    ctx.fillStyle = "#FF0000";
                }
                
                
                ctx.fillRect(element.x-(element.la/2)+globais.posicaoX,element.y - (10)+globais.posicaoY, 30*(element.vida/100), 6)
                ctx.fillStyle = "black";
                ctx.strokeRect(element.x-(element.la/2)+globais.posicaoX,element.y - (10)+globais.posicaoY, 30, 6);
                
            }
            //COLISÃO DANDO A CHANCE DE PEGAR O ITEM E DESENHANDO OS ATRIBUTOS NA TELA
            if(+globais.posicaoX+element.x-20<gravida.x+gravida.la && element.y+globais.posicaoY-10<gravida.y+gravida.al && element.x+element.la+globais.posicaoX+20>gravida.x && element.y+ element.al+globais.posicaoY+10>gravida.y){
                this.desenharAtributos(element.nome,element.dano,element.vida,element.historia,element.img,element.xI,element.yI,element.laI,element.alI);
                globais.PegarItem=i;
            }
            if(frames%30==0){
                element.nAnima++;
                
            }switch (element.nAnima) {
                case 1:
                    ctx.globalAlpha = 0.5;
                    break;
                
                case 4:
                    element.nAnima=0;
                    break;

                }
            ctx.drawImage(element.img,element.xI,element.yI,element.laI,element.alI,element.x+globais.posicaoX, element.y+globais.posicaoY,element.la,element.al);
            ctx.globalAlpha = 1;
        }
    },
    //FUNCTION QUE DESENHA OS ATRIBUTOS
    desenharAtributos(n,d,v,his,img,xI,yI,laI,alI){
        ctx.fillStyle = "#aa6529";
        ctx.fillRect(640, 10, 250, 120);
        ctx.fillStyle = "#301600";
        ctx.fillRect(650, 20, 230, 100);
        ctx.fillStyle = "#ffc592";
        ctx.fillRect(740, 30, 130, 80);
        ctx.fillStyle = "#ffc592";
        ctx.fillRect(660, 30, 70, 80);
        ctx.fillStyle = "black";
        ctx.font= '12px "Supermercado One"';
        ctx.fillStyle = "black";
        ctx.fillText("Atributos",745,19);
        if(d!=0){
            ctx.fillText("Dano: "+d, 745, 60);
            ctx.fillText("Vida: "+v, 745, 75);
        }else{
            TextoComQuebraLinha(ctx,"História: "+his,745, 60,10,120);
        }
        ctx.fillText("Nome: "+n, 745, 45);
        

        this.redimensionarItem(img,laI,alI,xI,yI,670,44,45,48.4);
        
    },
    redimensionarItem(img,laI,alI,xI,yI,x,y,MaxW,MaxH){
        let la = (laI*MaxH)/alI;//ve o tamanho da largura se a altura for a máxima
        if(la<=MaxW){
            let mid = MaxW/2-la/2;//centraliza a imagem
            ctx.drawImage(img,xI,yI,laI,alI,x+mid, y,la,MaxH);
        }else{
            let mid = MaxH/2-la/2;
            la =  (alI*MaxW)/laI;
            ctx.drawImage(img,xI,yI,laI,alI,x+mid, y,MaxH,la);
        }
    }
    
}

