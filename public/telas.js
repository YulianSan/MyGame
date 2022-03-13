function telaDesenhar(){
    let telaAtiva = TelaGame[globais.nTela];
    telaAtiva(globais.nTela);
}
var TelaGame=[]
var estadoTelaGame=[];
//Tela 0

TelaGame.push((indice)=>{
    if(!estadoTelaGame[indice]){

        gravida.x=400
        gravida.y=200

        console.log(`-> Desenhando tela: ${indice}`)
        estadoTelaGame[indice]={
            posicao:[
                posicaoX=0,
                posicaoY=0
            ],
            personagens:[ 
                npc.CriarNPC("Vini Hoshi",2,["Vagabunda . . . . ","O poeta é um fingidor.Finge tão completamente.Que chega a fingir que é dor.A dor que deveras sente.E os que lêem o que escreve,Na dor lida sentem bem,Não as duas que ele teve,Mas só a que eles não têm.E assim nas calhas da rodaGira, a entreter a razão,Esse comboio de cordaQue se chama o coração."],450,230,"RosyBrown"),
                npc.CriarNPC("Yulian Santiago",1,["E o Mario?","Quem é mario?","Aquele que te comeu atrás do armário KAKAKAKA","E o Alex ? (agora vou trollar ele KKK)","O primo do Dunha?","Quem é Dunha?","Aquele que te comeu com a unha KIHSOHOI"],700,430,"blue"),
                npc.CriarNPC("Luiz",1,["Já viu arcade?"],850,400,"black"),
                npc.CriarNPC("Marcelo",1,["Quer ouvir algo aleatório?","Não","ok :("],40,100,"purple"),
                npc.CriarNPC("Symon",1,["Eae tudo em cima?"],200,300,"black"),
                npc.CriarNPC("Maria",1,["Ja arrumou a cama?"],200,500,"pink"),
                npc.CriarNPC("Alex",1,["Cabron!!!","OI","Eae"],250,500,"yellow"),
                npc.CriarNPC("Sudario",1,["BABA!!!"],10,10,"black"),
                npc.CriarNPC("Renato",2,["Senhor toma conta desse bairro!"],90,90,"yellow"),
                npc.CriarNPC("Anderson",1,["Joinha!","QUE?","ND"],200,90,"black"),
                npc.CriarNPC("Alejandro",1,["Desviva","Ta noiado fi?"],-200,-90,"black"),
                npc.CriarNPC("Vinicius",1,["EAe!","oi?","que?","jfsoihfa","IUDWOIIFWE"],-100,0,"red")
            ],
            itens:[
                armas.CriarArmamento(1,"graveto",200,170,0,100,"Esse graveto tem historia, ele participou da foto mais famosa da Grávida de Taubaté"),
                armas.CriarArmamento(2,"faca",300,340,10,10,"A famosa faca do meme \'Olha a faca\'")
            ],
            predios:
                fundo.CriarPredio(5,1,fundo.CriarPredio(5,0,[]))
            ,
            ruas:
                fundo.CriarChao(1,7,100,100,
                fundo.CriarChao(6,1,100,100,
                fundo.CriarChao(0,7,100,100,[])
                )),
            
        }    
    }
    fundo.desenharResto("#61a225");
    fundo.desenharChao(estadoTelaGame[indice].ruas);
    gravida.anima();
    fundo.desenharPredio(estadoTelaGame[indice].predios);
    armas.desenharArmamento(estadoTelaGame[indice].itens);
    npc.desenharNPC(estadoTelaGame[indice].personagens);
    gravida.desenhar(); 
    gravida.mover();
    interagir.falar();
    fundo.desenharBotoes();

})

//Tela 1

TelaGame.push((indice)=>{
    fundo.desenharResto("#57422f");
    gravida.desenharInventario();
    ctx.font= '22px "Supermercado One"';
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(gravida.nome, 707.5, 310,185);
    ctx.textAlign = "left";
    ctx.drawImage(Gravida,72, 536,95,191,656, 63,95,191);
    
})

//tela 02

TelaGame.push((indice)=>{
    if(!estadoTelaGame[indice]){

        gravida.x=400
        gravida.y=200

        console.log(`-> Criando a tela: ${indice}`)
        estadoTelaGame[indice]={
            posicao:[
                posicaoX=0,
                posicaoY=0
            ],
            personagens:[ 
                npc.CriarNPC("Yulian Santiago A. Almanza",1,["Parabéns por conseguir"],0,0,"rgba(255,255,255,0.6)"),
                
                npc.CriarNPC("Soldados",1,["Parabéns"],-50,-50,"rgba(255,0,0,0.6)"),
                npc.CriarNPC("Soldados",1,["Parabéns"],-60,-40,"rgba(255,0,0,0.6)"),
                npc.CriarNPC("Soldados",1,["Parabéns"],-70,-30,"rgba(255,0,0,0.6)"),
                npc.CriarNPC("Soldados",1,["Parabéns"],-80,-20,"rgba(255,0,0,0.6)"),
                npc.CriarNPC("Soldados",1,["Parabéns"],-90,-10,"rgba(255,0,0,0.6)"),

                npc.CriarNPC("Soldados",1,["Parabéns"],-100,-60,"rgba(255,0,0,0.6)"),
                npc.CriarNPC("Soldados",1,["Parabéns"],-110,-50,"rgba(255,0,0,0.6)"),
                npc.CriarNPC("Soldados",1,["Parabéns"],-120,-40,"rgba(255,0,0,0.6)"),
                npc.CriarNPC("Soldados",1,["Parabéns"],-130,-30,"rgba(255,0,0,0.6)"),
                npc.CriarNPC("Soldados",1,["Parabéns"],-140,-20,"rgba(255,0,0,0.6)"),          
            ],
            itens:[
                armas.CriarArmamento(1,"Troféu",200,170,0,100,"Para béns, olha o seu Troféu"),
            ],
            predios: fundo.CriarPredio(7,0,[])
            ,
            ruas:fundo.CriarChao(0,10,50,20,[])
        }
    }
    
    fundo.desenharResto("#000");
    fundo.desenharChao(estadoTelaGame[indice].ruas);
    gravida.anima();
    fundo.desenharPredio(estadoTelaGame[indice].predios);
    armas.desenharArmamento(estadoTelaGame[indice].itens);
    npc.desenharNPC(estadoTelaGame[indice].personagens);
    gravida.desenhar(); 
    gravida.mover();
    interagir.falar();
    fundo.desenharBotoes();

})

function limparTela(TelaQueSeraAtiva){
    if(TelaQueSeraAtiva=="back"){
        globais.nTela=globais.historicoDeNavegacao[globais.historicoDeNavegacao.length-2]
        globais.historicoDeNavegacao.push(
            globais.historicoDeNavegacao[globais.historicoDeNavegacao.length-2]
            
        )
        return
    }
    globais.historicoDeNavegacao.push(TelaQueSeraAtiva)
    globais.nTela=TelaQueSeraAtiva
}
    