var fundo={
    chao:[],predios:[],botoes:[],
    Antigoy:0,Antigox:0,
    ladox:0,ladoy:0,
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
    desenharPredio(){
        for (var element of this.predios) {
            ctx.drawImage(element.img,element.xI,element.yI,element.laI,element.alI,element.x+globais.posicaoX, element.y+globais.posicaoY,element.la,element.al);

        }
    },
    // DESENHA CHÃO
    desenharChao(){
        if(this.chao.length<5){this.CriarChao(0);}
        else if(this.chao.length<6){this.CriarChao(6);}
        else if(this.chao.length<8){this.CriarChao(1);}
        else if(this.chao.length<9){this.CriarChao(4);}
        else if(this.chao.length<11){this.CriarChao(0);}
        else if(this.chao.length<12){this.CriarChao(6);}
        else if(this.chao.length<14){this.CriarChao(1);}
        this.Antigoy=0;this.Antigox=0;
        for (var element of this.chao) {
            
            ctx.drawImage(element.img,element.xI,element.yI,element.laI,element.alI,this.Antigox+element.x+globais.posicaoX, this.Antigoy+element.y+globais.posicaoY,element.la,element.al);
            switch (element.dir) {
                case 0:
                    this.Antigoy=this.Antigoy+44;
                    this.Antigox=this.Antigox+142;
                break;
                case 1:
                    this.Antigoy=this.Antigoy-130;
                    this.Antigox=this.Antigox+65;
                break;
                case 2:
                    this.Antigoy=this.Antigoy+element.al;
                break;
                case 3:
                    this.Antigox=this.Antigox-element.la;
                case 4:
                case 5:
                    this.Antigoy=this.Antigoy+44;
                    this.Antigox=this.Antigox+140;
                break;
                case 6:
                    this.Antigoy=this.Antigoy-120;
                    this.Antigox=this.Antigox+63;
                break;
                case 7:
                this.Antigoy=this.Antigoy+element.al;
                break;   
            }   
        }
        
    },
    //CRIAR CHÃO
    CriarChao(n){
        if(n==0 || n==2){
            this.chao.push({
                img:fundoImg,alI:177,laI:208,al:177,la:208,x:0,y:0,xI:223,yI:16,dir:n
            });
        }if(n==1 || n==3){
            this.chao.push({
                img:fundoImg,alI:177,laI:212,al:177,la:212,x:0,y:0,xI:3,yI:12,dir:n
            });
        }if(n==4){
            this.chao.push({
                img:fundoImg,alI:150,laI:215,al:150,la:215,x:0,y:27,xI:20,yI:580,dir:n
            });
        }if(n==5){
            this.chao.push({
                img:fundoImg,alI:215,laI:150,al:215,la:150,x:0,y:0,xI:258,yI:594,dir:n
            });
        }if(n==6){
            this.chao.push({
                img:fundoImg,alI:150,laI:215,al:150,la:215,x:0,y:0,xI:258,yI:594,dir:n
            });
        }if(n==7){
            this.chao.push({
                img:fundoImg,alI:61,laI:62,al:122,la:121,x:0,y:0,xI:164,yI:115,dir:n
            });
        }if(n==8){
            this.chao.push({
                img:fundoImg,alI:105,laI:110,al:105,la:110,x:0,y:0,xI:171,yI:3,dir:n
            })
        }
    },
    // CRIA PREDIOS
    CriarPredio(n,skin){
        for (let i = 0;  i< n; i++) {
            if(skin==0){
                
                if(fundo.predios.length>0 && fundo.predios[fundo.predios.length-1].n!=0 ){
                    this.ladox-=69;
                    this.ladoy+=137;
                    
                    this.ladox+=142;
                    this.ladoy+=44;

                }
                this.predios.push({
                    img:fundoImg,alI:352,laI:216,al:352,la:216,x:60+this.ladox,y:-320+this.ladoy,xI:17,yI:213,n:skin
                });
                
                this.ladox+=142;
                this.ladoy+=44;
            }if(skin==1){
                if(fundo.predios.length>0 && fundo.predios[fundo.predios.length-1].n==0){
                    this.ladox-=142;
                    this.ladoy-=44;

                    this.ladox+=69;
                    this.ladoy-=137;
                }
                this.predios.push({
                    img:fundoImg,alI:352,laI:216,al:352,la:216,x:60+this.ladox,y:-320+this.ladoy,xI:265,yI:211,n:skin
                });
                this.ladox+=69;
                this.ladoy-=137;
            }
        }
    },
    
}