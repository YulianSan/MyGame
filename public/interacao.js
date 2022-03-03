const interagir={
    falaPosivel:"",falaAceita:"",
    textoSeparado:"",indice:0,
    nome:"",nomeAceita:"",
    limpa:false,nFala:0,pularfala:0,
    
    falar(){
        if(this.falaAceita.length>0){
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, 50);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 395, canvas.width, 205);
            ctx.fillStyle = "white";
            ctx.font= '17px "Supermercado One"';
            //ROSTOS DA GRÁVIDA
            if(this.nFala%2==1){
                ctx.fillStyle= "#ff74df";
                ctx.beginPath();
                ctx.moveTo(0,50);
                ctx.lineTo(300,50);
                ctx.lineTo(0,400);
                ctx.fill()
                if(frames%50>26){
                    ctx.drawImage(rostos,0,0,220,240,10,100,220,241);
                }else if(frames%50<=26){
                    ctx.drawImage(rostos,234,0,220,240,10,100,220,241);
                }
            }//ROSTOS DO NPC
            if(this.nFala%2==0){
                ctx.fillStyle= "#00f";
                ctx.beginPath();
                ctx.moveTo(900,50);
                ctx.lineTo(600,50);
                ctx.lineTo(900,400);
                ctx.fill()
                if(frames%50>26){
                    ctx.drawImage(rostos,155,261,130,121,598,100,259,241);
                }else if(frames%50<=26){
                    ctx.drawImage(rostos,13,261,129,121,600,100,257,241);
                }
            }
            //TEXTO É EXIBIDO
            ctx.fillStyle= "#777";
            ctx.font= '18px "Supermercado One"';
            this.textoSeparado =this.dividirTexto(this.falaAceita[this.nFala]);
            ctx.fillText((this.nFala%2==0 ? this.nomeAceita : gravida.nome),10,420);
            ctx.font= '17px "Supermercado One"';
            ctx.fillStyle= "#eee";
            TextoComQuebraLinha(ctx,this.mostrarTexto(this.textoSeparado,this.indice), 10, 445,20,880);

            switch (this.pularfala) {
                case 1:
                    this.esperar();
                    this.pularfala=0;
                break;
                case 2:
                    this.limparFala();
                    this.pularfala=0;
                break;
            }
        }
    },
  
    limparFala(){      
        this.falaAceita.splice(0, this.falaAceita.length);
        this.indice=0;
        this.nFala=0;
        this.pularfala=0;   
    },
    
    esperar() {
        this.indice=0;
        this.nFala++;         
    },
    
    dividirTexto(texto){
        if(texto != undefined){
            var textoLetra=texto.split("");
            return textoLetra;
        }
    },

    mostrarTexto(texto,ind){
        if(this.nFala<this.falaAceita.length && this.pularfala==0){
            var textoCompleto="";
            for(var i=0;i<ind;i++){
                textoCompleto=textoCompleto+texto[i];
            }if(ind<texto.length){
                if(frames%5==0){
                    textoCompleto=textoCompleto+texto[ind];
                    this.indice++;
                }
            }
            //SE FALA QUE É UM ARRAY TIVER MAIS FALAS ELE PULA PARA A PRÓXIMA FALA
            if((ind)==texto.length && this.nFala+1<this.falaAceita.length){
                
                ctx.textAlign = "right";
                ctx.fillText("Próximo ▸▸",830,520);
                ctx.textAlign = "left";
            }
            //SENÃO ELE SAI DA FALA
            else if((ind)==texto.length && this.nFala+1==this.falaAceita.length){
                ctx.textAlign = "right";
                ctx.fillText("Sair ▸▸",830,520);
                ctx.textAlign = "left";
            }
        }
        // RETORNA O TEXTO
        if(textoCompleto==undefined){
            if(this.falaAceita[this.nFala]==undefined){
                return " ";
            }else{
                return this.falaAceita[this.nFala];   
            }
        }else{
            if(ind>this.indice){
                return " ";
            }else{
                return textoCompleto;
            } 
        }
    }
};
//colocar texto com quebra de linha automática
function TextoComQuebraLinha( context , text, x, y, lineHeight, fitWidth)
{
    fitWidth = fitWidth || 0;
    
    if (fitWidth <= 0)
    {
        context.fillText( text, x, y );
        return;
    }
    var words = text.split(' ');
    var currentLine = 0;
    var idx = 1;
    while (words.length > 0 && idx <= words.length)
    {
        var str = words.slice(0,idx).join(' ');
        var w = context.measureText(str).width;
        if ( w > fitWidth )
        {
            if (idx==1)
            {
                idx=2;
            }
            context.fillText( words.slice(0,idx-1).join(' '), x, y + (lineHeight*currentLine) );
            currentLine++;
            words = words.splice(idx-1);
            idx = 1;
        }
        else
        {idx++;}
    }
    if  (idx > 0)
        context.fillText( words.join(' '), x, y + (lineHeight*currentLine) );
}