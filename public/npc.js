var npc={
    //personagens desenhados depois da gravida de taubaté
    personagemDepois:[0],
    desenharNPC(npcs){
        //CODIGO PARA DESENHAR OS PERSONAGENS ----------- DADOS PARA CRIAR(NOME,NÚMERO DA SKIN, [FALA],X,Y,COR DO NOME)---------------[]=ARRAY

        //SEMPRE ZERANDO A VARIÁVEL POIS E USANDA EM UMA FUNÇÃO QUE USA ELA COMO ENTRADA, SE NÃO FOR ZERADA
        //A GRÁVIDA PODERÁ INTERAGIR SEM ESTAR PRÓXIMO DE UM NPC
        interagir.falaPosivel="";
        this.personagemDepois.splice(0, npc.personagemDepois.length);

        for (let i in npcs) {
            
            //ANIMAÇÃO DE CADA SKIN DE PERSONAGEM
            const element = npcs[i];
            if (frames%30==0) {
                element.nAnima++;
                switch (element.num) {
                    case 1:
                        switch (element.nAnima) {
                        case 1:
                            element.xI=16;
                            element.yI=24;
                            element.alI=223;
                            element.laI=127;
                        break;
                        case 2:
                            element.xI=272;
                            element.yI=24;
                            element.alI=223;
                            element.laI=127;
                        break;
                        case 3:
                            element.xI=16;
                            element.yI=280;
                            element.alI=223;
                            element.nAnima=0;
                        break;
                        }
                    break;

                    case 2:
                    switch (element.nAnima) {
                        case 1:
                            element.xI=172;
                            element.yI=40;
                            
                        break;
                        case 2:
                            element.xI=684;
                            element.yI=40;
                            
                        break;
                        case 3:
                            element.xI=172;
                            element.yI=552;
                            element.nAnima=0;
                        break;
                        }
                    break;
                    
                }
                
            }
            //VÊ SE PODE INTERAGIR COM UM PERSONAGEM ----------- POR MEIO DA COLISÃO
            //POR ISSO SE ZERA A VÁRIAVEL POIS SE ESTIVER COM ALGO SEM ESTAR PERTO DE UM NPC PODE DAR PROBLEMAS
            if(globais.posicaoX+element.x-20<gravida.x+gravida.la && element.y+globais.posicaoY-10<gravida.y+gravida.al && element.x+element.la+globais.posicaoX+20>gravida.x && element.y+ element.al+globais.posicaoY+10>gravida.y){
                interagir.falaPosivel=element.fala.slice();
                interagir.nome=element.id;
            }
            //DESENHAR O PERSNAGEM E O NOME DELE LOGO EM CIMA DA CABEÇA

            //Desenha os personagens que deverão ficar atrás da grávida 
            if(globais.posicaoY+element.y+element.al<gravida.y+gravida.al){
                ctx.drawImage(element.img,element.xI,element.yI,element.laI,element.alI,element.x+globais.posicaoX, element.y+globais.posicaoY,element.la,element.al);
                ctx.textAlign = "center";
                ctx.fillStyle = element.cor;
                ctx.font= '14px "Supermercado One"';
                ctx.fillText(element.id, element.x+globais.posicaoX+element.la/2, element.y+globais.posicaoY);
                ctx.textAlign = "left";
            }else{
                //Guarda os personagens que deverão ficar na frente da gravida em uma variável para que depois se possa desenhar esses personagens
                //para que tenha o efeito 3d 
                npc.personagemDepois.push({num:i});
            }
        }
    },
    //desenha os NPCS que estaram na frente da grávida, função chamada na gravida.desenhar
    desenharNPCDepois(){
        for(let i in npc.personagemDepois){
            const element = estadoTelaGame[globais.nTela].personagens[npc.personagemDepois[i].num];
            ctx.drawImage(element.img,element.xI,element.yI,element.laI,element.alI,element.x+globais.posicaoX, element.y+globais.posicaoY,element.la,element.al);
            ctx.textAlign = "center";
            ctx.fillStyle = element.cor;
            ctx.font= '14px "Supermercado One"';
            ctx.fillText(element.id, element.x+globais.posicaoX+element.la/2, element.y+globais.posicaoY);
            ctx.textAlign = "left";
        }
    },
    //CRIAÇÃO DOS PERSONAGEM -------------- CADA NÚMERO REPRESENTA UMA SKIN
    CriarNPC(nome,num,fala,x,y,cor){
        let personagem = {}
        if(num==1){
            personagem={
                id:nome,fala:fala.slice(),x:x,y:y,
                xI:16,yI:24,alI:223,laI:127,
                al:44.6*1.10,la:25.4*1.10,img:NPC1,
                cor:cor,nAnima:0,num:num
            }
            
        }
        if(num==2){
            personagem={
                id:nome,fala:fala.slice(),x:x,y:y,
                xI:172,yI:40,alI:459,laI:247,
                al:45.9*1.1,la:24.7*1.1,img:NPC2,
                cor:cor,nAnima:0,num:num
            }
        }
        return personagem
        
    },
    colisao(){
        //Aqui sera a colisão entre a grávida e os npc, mas não colocarei essa parte no programa
        return true;
    }
}

