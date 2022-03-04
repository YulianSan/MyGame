const comandosTeclado={
    ArrowUp(){
        gravida.cima=true;
    },

    ArrowDown(){
        gravida.baixo=true;
    },

    ArrowRight(){
        gravida.direita=true;
    },

    ArrowLeft(){
        gravida.esquerda=true;
    },

    e(){
        if(interagir.falaPosivel=="" || interagir.falaPosivel==null){
            console.log("Ninguém para interagir");
        }else{
            if(interagir.falaAceita=="" || interagir.falaAceita==null){
                interagir.falaAceita=interagir.falaPosivel.slice();
                interagir.nomeAceita=interagir.nome;
            } 
        }
    },

    p(){
        var item=estadoTelaGame[globais.nTela].itens;
        var ind=globais.PegarItem;
        if(ind==-1){
            console.log("Nem um item próximo");
        }else{
            
            if(gravida.inventario.length>0){
                for(var i=0;i<gravida.inventario.length;i++) {
                    if(item[ind].nome==gravida.inventario[i].nome ){
                        gravida.inventario[i].espaco+=item[globais.PegarItem].espaco;
                        armas.armamentos.splice(ind, 1); 
                        return
                        
                    }else if(gravida.inventario.length<9){
                        gravida.inventario[gravida.inventario.length]=item[ind];
                        item.splice(ind, 1); 
                        return
                    } 
                }
            }else{
                gravida.inventario[gravida.inventario.length]=item[ind];
                item.splice(ind, 1);   
            }
        }
    }
}