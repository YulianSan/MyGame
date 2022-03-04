function colisao(vx,vy,predios) { 
    let posX=estadoTelaGame[globais.nTela].posicao[0]
    let posY=estadoTelaGame[globais.nTela].posicao[1]
    for (var i = 0; i < predios.length; i++) {
        var element = predios[i];
        if(predios[i].n==0 ){
            if(predios[i+1]!= undefined && predios[i+1].n==1){
                
                if(68+element.x+posX+143>gravida.x+vx &&
                    element.y+posY+218+137>gravida.y+vy+33 && 
                    element.x+posX+143<gravida.la+gravida.x+vx &&
                    218+element.y+posY<gravida.y+gravida.al+vy){
    
                    var cmcColisaoX = gravida.x+vx;
                    var cmcColisaoY = gravida.y+vy;
        
                    var sobe=137/68;
                    
                    var colisaoX = 68+143+element.x+posX-cmcColisaoX;
                    var colisaoY = (colisaoX*sobe);
        
                    if(colisaoX<=0){
                        return true;
        
                    }else if(element.x+posX+(143+68-colisaoX)==cmcColisaoX &&
                    colisaoY+element.y+posY+218>cmcColisaoY+30 &&
                    element.y+posY+218<cmcColisaoY+gravida.al){
                        return true;
        
                    }
                }    
            } 

            //45 altura, 142 largura
            // 307+element.y+globais.posicaoY = Y da colisao do predio
            if(142+element.x+posX>gravida.x+vx &&
                element.y+posY+307+45>gravida.y+vy+30 && 
                element.x+posX<gravida.la+gravida.x+vx -(i==0?7:0) &&
                307+element.y+posY<gravida.y+gravida.al+vy){

                
                var cmcColisaoX = gravida.x+gravida.la+vx;
                var cmcColisaoY = gravida.y+vy;
    
                var sobe=45/142;
                
                var colisaoX = 142+element.x+posX-cmcColisaoX;
                var colisaoY = 307+45-(colisaoX*sobe);
    
                if(colisaoX<=0){
                    return true;
    
                }else if(element.x+posX+(142-colisaoX)==cmcColisaoX &&
                colisaoY+element.y+posY>cmcColisaoY+30 &&
                element.y+posY+307<cmcColisaoY+gravida.al){
                    return true;
    
                }
            }
            if(i==0){
                if(element.x+2+68+posX>gravida.x+vx &&
                    element.y+137+174+posY>gravida.y+vy+20 &&
                    element.x+2+posX<gravida.la+gravida.x+vx &&
                    element.y+174+posY<gravida.y+gravida.al+vy){
            
                    var cmcColisaoX = gravida.la+gravida.x-4+vx;
                    var cmcColisaoY = gravida.al+gravida.y+vy;
        
                    var sobe=137/68;
                    
                    var colisaoX = 68-(68+(element.x+2+posX)-cmcColisaoX);
                    
                    var colisaoY = (colisaoX*sobe);
                    var yR=element.y+174+posY+(137-colisaoY)
        
                    colisaoX =(68+(element.x+2+posX)-cmcColisaoX);
                    if(colisaoX<=0 ||
                        gravida.y>=(element.y+174+posY)+137){
                        
                        return true;
        
                    }
                    colisaoX = 68-(68+(element.x+2+posX)-cmcColisaoX);
                    if((element.x+posX+2)+(colisaoX)==cmcColisaoX && colisaoY+yR>cmcColisaoY && yR<cmcColisaoY){
                        return true;
        
                    }
                }
            }  
        }

        else if(predios[i].n==1 ){
            if(68+element.x+posX+143>gravida.x+vx &&
                element.y+posY+218+137>gravida.y+vy+30 && 
                element.x+posX+143<gravida.la+gravida.x+vx &&
                218+element.y+posY<gravida.y+gravida.al+vy){

                
                var cmcColisaoX = gravida.x+vx;
                var cmcColisaoY = gravida.y+vy;
    
                var sobe=137/68;
                
                var colisaoX = 68+143+element.x+posX-cmcColisaoX;
                var colisaoY = (colisaoX*sobe);
    
                if(colisaoX<=0){
                    return true;
    
                }else if(element.x+posX+(143+68-colisaoX)==cmcColisaoX &&
                colisaoY+element.y+posY+218>cmcColisaoY+30 &&
                element.y+posY+218<cmcColisaoY+gravida.al){
                    return true;
    
                }
            }
            if(element.x+2+68+posX>gravida.x+vx &&
                element.y+137+174+posY>gravida.y+vy+20 &&
                element.x+2+posX<gravida.la+gravida.x+vx+30 &&
                element.y+174+posY<gravida.y+gravida.al+vy){
        
                var cmcColisaoX = gravida.la+gravida.x+vx+30;
                var cmcColisaoY = gravida.al+gravida.y+vy;
    
                var sobe=137/68;
                
                var colisaoX = 68-(68+(element.x+2+posX)-cmcColisaoX);
                
                var colisaoY = (colisaoX*sobe);
                var yR=element.y+174+posY+(137-colisaoY)
    
                colisaoX =(68+(element.x+2+posX)-cmcColisaoX);
                if(colisaoX<=0 ||
                    gravida.y>=(element.y+174+posY)+137){
                    
                    return true;
    
                }
                colisaoX = 68-(68+(element.x+2+posX)-cmcColisaoX);
                if((element.x+posX+2)+(colisaoX)==cmcColisaoX && colisaoY+yR>cmcColisaoY && yR<cmcColisaoY){
                    return true;
    
                }
            } 
        }
    }
    return false;
}      