var fundo={

    botoes:[],
    Antigoy:0,Antigox:0,
    // DESENHA BOTÃO
    desenharBotoes(){
        if(this.botoes.length<1){this.CriarBotoes(1)}
        else if(this.botoes.length<2){this.CriarBotoes(2)}
        for (var element of this.botoes) {
            ctx.drawImage(element.img,element.xI,element.yI,element.laI,element.alI,element.x, element.y,element.la,element.al);

        }
    },
    //CRIA BOTÕES
    CriarBotoes(n){
        if(n==1){
            this.botoes.push({
                img:botao,x:canvas.width-47.3,y:canvas.height-60,al:47.3,la:27.5,alI:215,laI:125,xI:0,yI:0
            });
        }else if(n==2){
            this.botoes.push({
                img:audio,x:10,y:10,al:45.2,la:47,alI:225,laI:255,xI:0,yI:225
            });
        }
    },
    // DESENHA A COR DE FUNDO DANDO O VALOR PELO SCOPO
    desenharResto(cor){
        ctx.fillStyle = cor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    },
    // DESENHA PERDIOS 
    desenharPredio(predio){
        let posX=estadoTelaGame[globais.nTela].posicao[0]
        let posY=estadoTelaGame[globais.nTela].posicao[1]
        for (var element of predio) {
            ctx.drawImage(element.img,element.xI,element.yI,element.laI,element.alI,element.x+posX, element.y+posY,element.la,element.al);

        }
    },
    // DESENHA CHÃO
    desenharChao(chao){
        let posX=estadoTelaGame[globais.nTela].posicao[0]
        let posY=estadoTelaGame[globais.nTela].posicao[1]

        for (let i=0;i<chao.length;i++) {
            const element = chao[i];
            
            ctx.drawImage(element.img,element.xI,element.yI,element.laI,element.alI,element.x+posX, element.y+posY,element.la,element.al); 
        }
        
    },
    //CRIAR CHÃO
    CriarChao(skin,n,vlr_x,vlr_y,chaoJaCriado){

        let chao=chaoJaCriado
        
        for (let i = 0; i < n; i++) {
            const elementAnterior = chao[chao.length-1] || null;
            var proximoX = vlr_x
            var proximoY = vlr_y
            if(elementAnterior){
                proximoX = elementAnterior.x
                proximoY = elementAnterior.y
                switch (skin) {
                    case 0:
                        proximoY+=44;
                        proximoX+=142;
                    break;
                    case 1:
                        proximoY-=130;
                        proximoX+=65;
                    break;
                    case 4:
                    case 5:
                    case 6:
                        proximoY+=44;
                        proximoX+=140;
                    break;
                    // case 6:
                    //     proximoY-=120;
                    //     proximoX+=63;
                    // break; 
                }
            }
            if(skin==0 || skin==2){
                chao.push({
                    img:fundoImg,alI:177,laI:208,al:177,la:208,x:0+proximoX,y:0+proximoY,xI:223,yI:16,dir:skin
                })
            }if(skin==1 || skin==3){
                chao.push({
                    img:fundoImg,alI:177,laI:212,al:177,la:212,x:0+proximoX,y:0+proximoY,xI:3,yI:12,dir:skin
                })
            }if(skin==4){
                chao.push({
                    img:fundoImg,alI:150,laI:215,al:150,la:215,x:0+proximoX,y:27+proximoY,xI:20,yI:580,dir:skin
                })
            }if(skin==5){
                chao.push({
                    img:fundoImg,alI:215,laI:150,al:215,la:150,x:0+proximoX,y:0+proximoY,xI:258,yI:594,dir:skin
                })
            }if(skin==6){
                chao.push({
                    img:fundoImg,alI:150,laI:215,al:150,la:215,x:0+proximoX,y:0+proximoY,xI:258,yI:594,dir:skin
                })
            }if(skin==7){
                chao.push({
                    img:fundoImg,alI:61,laI:62,al:122,la:121,x:0+proximoX,y:0+proximoY,xI:164,yI:115,dir:skin
                })
            }if(skin==8){
                chao.push({
                    img:fundoImg,alI:105,laI:110,al:105,la:110,x:0+proximoX,y:0+proximoY,xI:171,yI:3,dir:skin
                })
            }  
        }

        return chao
    },
    // CRIA PREDIOS
    CriarPredio(n,skin,prediosJaCriados){
        
        let predio=prediosJaCriados || []
        // this.ladox+=69;
        // this.ladoy-=137;
        
        // this.ladox+=142;
        // this.ladoy+=44;
        
                

        for (let i = 0;  i< n; i++) {
            
            let predioAnterior=predio[predio.length-1] || null
            
            let proximoX=60
            let proximoY=-320

            if(predioAnterior){
                proximoX=predioAnterior.x
                proximoY=predioAnterior.y

                switch (skin) {
                    case 0:
                        proximoX+=142
                        proximoY+=44
                        break;
                    
                    case 1:
                        proximoX+=69
                        proximoY-=137
                        break;

                    default:
                        return {}
                        break;
                }

            }
            

            if(skin==0){

                predio.push({
                    img:fundoImg,alI:352,laI:216,al:352,la:216,
                    x:proximoX,y:proximoY,xI:17,yI:213,
                    n:skin
                })

            }

            if(skin==1){

                predio.push({
                    img:fundoImg,
                    alI:352,laI:216,al:352,la:216,
                    x:proximoX,y:proximoY,xI:265,yI:211,
                    n:skin
                })

            }

        }
        return predio
    },
    
}