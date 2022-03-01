function colisao(vx,vy) { 
    for (var i = 0; i < fundo.predios.length; i++) {
        var element = fundo.predios[i];
        if(fundo.predios[i].n==0 ){
            if(fundo.predios[i+1]!= undefined && fundo.predios[i+1].n==1){
                
                if(68+element.x+globais.posicaoX+143>gravida.x+vx &&
                    element.y+globais.posicaoY+218+137>gravida.y+vy+33 && 
                    element.x+globais.posicaoX+143<gravida.la+gravida.x+vx &&
                    218+element.y+globais.posicaoY<gravida.y+gravida.al+vy){
    
                    var cmcColisaoX = gravida.x+vx;
                    var cmcColisaoY = gravida.y+vy;
        
                    var sobe=137/68;
                    
                    var colisaoX = 68+143+element.x+globais.posicaoX-cmcColisaoX;
                    var colisaoY = (colisaoX*sobe);
        
                    if(colisaoX<=0){
                        return true;
        
                    }else if(element.x+globais.posicaoX+(143+68-colisaoX)==cmcColisaoX &&
                    colisaoY+element.y+globais.posicaoY+218>cmcColisaoY+30 &&
                    element.y+globais.posicaoY+218<cmcColisaoY+gravida.al){
                        return true;
        
                    }
                }    
            } 

            //45 altura, 142 largura
            // 307+element.y+globais.posicaoY = Y da colisao do predio
            if(142+element.x+globais.posicaoX>gravida.x+vx &&
                element.y+globais.posicaoY+307+45>gravida.y+vy+30 && 
                element.x+globais.posicaoX<gravida.la+gravida.x+vx -(i==0?7:0) &&
                307+element.y+globais.posicaoY<gravida.y+gravida.al+vy){

                
                var cmcColisaoX = gravida.x+gravida.la+vx;
                var cmcColisaoY = gravida.y+vy;
    
                var sobe=45/142;
                
                var colisaoX = 142+element.x+globais.posicaoX-cmcColisaoX;
                var colisaoY = 307+45-(colisaoX*sobe);
    
                if(colisaoX<=0){
                    return true;
    
                }else if(element.x+globais.posicaoX+(142-colisaoX)==cmcColisaoX &&
                colisaoY+element.y+globais.posicaoY>cmcColisaoY+30 &&
                element.y+globais.posicaoY+307<cmcColisaoY+gravida.al){
                    return true;
    
                }
            }
            if(i==0){
                if(element.x+2+68+globais.posicaoX>gravida.x+vx &&
                    element.y+137+174+globais.posicaoY>gravida.y+vy+20 &&
                    element.x+2+globais.posicaoX<gravida.la+gravida.x+vx &&
                    element.y+174+globais.posicaoY<gravida.y+gravida.al+vy){
            
                    var cmcColisaoX = gravida.la+gravida.x-4+vx;
                    var cmcColisaoY = gravida.al+gravida.y+vy;
        
                    var sobe=137/68;
                    
                    var colisaoX = 68-(68+(element.x+2+globais.posicaoX)-cmcColisaoX);
                    
                    var colisaoY = (colisaoX*sobe);
                    var yR=element.y+174+globais.posicaoY+(137-colisaoY)
        
                    console.log(colisaoX)
                    colisaoX =(68+(element.x+2+globais.posicaoX)-cmcColisaoX);
                    if(colisaoX<=0 ||
                        gravida.y>=(element.y+174+globais.posicaoY)+137){
                        
                        return true;
        
                    }
                    colisaoX = 68-(68+(element.x+2+globais.posicaoX)-cmcColisaoX);
                    if((element.x+globais.posicaoX+2)+(colisaoX)==cmcColisaoX && colisaoY+yR>cmcColisaoY && yR<cmcColisaoY){
                        return true;
        
                    }
                }
            }  
        }

        else if(fundo.predios[i].n==1 ){
            if(68+element.x+globais.posicaoX+143>gravida.x+vx &&
                element.y+globais.posicaoY+218+137>gravida.y+vy+30 && 
                element.x+globais.posicaoX+143<gravida.la+gravida.x+vx &&
                218+element.y+globais.posicaoY<gravida.y+gravida.al+vy){

                
                var cmcColisaoX = gravida.x+vx;
                var cmcColisaoY = gravida.y+vy;
    
                var sobe=137/68;
                
                var colisaoX = 68+143+element.x+globais.posicaoX-cmcColisaoX;
                var colisaoY = (colisaoX*sobe);
    
                if(colisaoX<=0){
                    return true;
    
                }else if(element.x+globais.posicaoX+(143+68-colisaoX)==cmcColisaoX &&
                colisaoY+element.y+globais.posicaoY+218>cmcColisaoY+30 &&
                element.y+globais.posicaoY+218<cmcColisaoY+gravida.al){
                    return true;
    
                }
            }
            if(element.x+2+68+globais.posicaoX>gravida.x+vx &&
                element.y+137+174+globais.posicaoY>gravida.y+vy+20 &&
                element.x+2+globais.posicaoX<gravida.la+gravida.x+vx+30 &&
                element.y+174+globais.posicaoY<gravida.y+gravida.al+vy){
        
                var cmcColisaoX = gravida.la+gravida.x+vx+30;
                var cmcColisaoY = gravida.al+gravida.y+vy;
    
                var sobe=137/68;
                
                var colisaoX = 68-(68+(element.x+2+globais.posicaoX)-cmcColisaoX);
                
                var colisaoY = (colisaoX*sobe);
                var yR=element.y+174+globais.posicaoY+(137-colisaoY)
    
                console.log(colisaoX)
                colisaoX =(68+(element.x+2+globais.posicaoX)-cmcColisaoX);
                if(colisaoX<=0 ||
                    gravida.y>=(element.y+174+globais.posicaoY)+137){
                    
                    return true;
    
                }
                colisaoX = 68-(68+(element.x+2+globais.posicaoX)-cmcColisaoX);
                if((element.x+globais.posicaoX+2)+(colisaoX)==cmcColisaoX && colisaoY+yR>cmcColisaoY && yR<cmcColisaoY){
                    return true;
    
                }
            } 
        }
    }
    return false;
}      