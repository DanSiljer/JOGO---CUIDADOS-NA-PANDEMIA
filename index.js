////JOGO - CUIDADOS NA PANDEMIA

////Em 2020 o mundo passou a viver recluso devido a uma pandemia. Tivemos que fazer escolhas dificeis não contaminar as pessoas que amamos.

//  O vírus entra no organismo pelos olhos, nariz e boca, por isso é fundamental o distanciamento social, lavar bem as mãos e o uso de máscaras.

var continuar = 0;
var totalVidas = 0;
do {
////CLASSE QUE SERA RESPONSAVEL PELO PESONAGEM
class Personagem {
  constructor(nome, higiene, sair, fase, vidas, horas, minutos, dia, totalVidas) {
    this.nome = nome;
    this.higiene = higiene;
    this.sair = false;
    this.fase = 0
    this.vidas = 5;
    this.horas = 6;
    this.minutos = 0;
    this.dia = 15;
    this.totalVidas = [];
  }
  higienizar(){
    this.higiene = true;
  }
  status(){
      console.log(`
      Hoje é o dia ${this.dia}
      Horas: ${this.horas}
      Vidas: ${this.vidas}
      `)
  }
  avancaTempo(tempo){
    this.horas += tempo
  }
  mostrarhora(){
    console.log(`Agora são ${this.horas}:${this.minutos} horas`);
}
  mudarVida(vidas){
    this.vidas += vidas
}
  mostrarVida(){
    console.log(`Você tem ${this.vidas} vidas`);
}
totalVidas(){
  this.totalVidas += this.vidas
}
mostarTotalVidas(){
  console.log(`Você tem ${this.totalVidas} vidas`);
}
}
personagem = prompt(`****** Informe o nome do jogador ******\n:`);
var personagem = new Personagem (100);
personagem.status( );
function higiene(){
for (var vidas = 0; vidas = 5; vidas++){
    console.log(`
    Hora de higienizar as mãos!\n
    Escolha uma opção:
    1 - Lavou com água e sabão
    2 - Só passou ácool em gel 70º
    3 - Só lavou com água
    4 - Não lavou
    0 - Sair
    `)
    let opcao = +prompt("***** Digite sua escolha ******:\n");
    if (opcao == 1) {
        console.log("Lave as mãos várias vezes ao dia, ganhou 4 vidas.");
        console.log();
        personagem.avancaTempo(1);
        personagem.mostrarhora()
        personagem.mudarVida(4);
        personagem.mostrarVida();
        return;
    } else if (opcao == 2) {
        console.log("O uso do álcool gel é para sujeiras não visíveis.\nGanhou 3 vidas.");
        personagem.avancaTempo(1);
        personagem.mostrarhora();
        personagem.mudarVida(3);
        personagem.mostrarVida();
        return
    } else if (opcao == 3) {
        console.log("Só água não mata os vírus. Perdeu 4 vidas")
        personagem.avancaTempo(1);
        personagem.mostrarhora();
        personagem.mudarVida(-4);
        personagem.mostrarVida();
        return
    } else if (opcao == 4) {
      console.log("Lave antes e depois de ir ao banheiro, quando for manusear alimentos, quando tocar em algo, quando sair e voltar de casa. Procedimentos que devem ser habituais e não só para este momento. Perdeu 5 vidas!");
        personagem.avancaTempo(1);
        personagem.mostrarhora();
        personagem.mudarVida(-5);
        personagem.mostrarVida();
        return
    } else if (opcao == 0) {
      personagem.status(vidas);
      personagem.mostarTotalVidas();
      return
    } else {
        console.log("Opção inválida!")
    }
} 
}
higiene();
var fase = prompt("***** Deseja seguir para 2ª fase? S/N *****: \n").toUpperCase();
while(fase){
if(fase == "S"){
  sair();
} else if(fase == "N"){
  console.log("**************************************************************\nO distanciamento e o isolamento social são provisórios e necessários para reduzir a propagação do vírus. Mantenha distância mínima de um metro e meio entre pessoas em lugares públicos e de convívio social, sempre usando máscaras.\n**************************************************************");
  break;
}else {
        console.log("Opção inválida!")
        
    }
    break;
}
function sair(){
for (var vidas = 0; vidas += 5; vidas++){
let trabalho = prompt("***** Vai sair de casa? S/N *****\n") 
if(trabalho.toUpperCase() == "N"){

      console.log(`Você ganhou ${this.vidas} vidas\n`);
      return
}
while (trabalho.toUpperCase() == "S"){
    console.log(`
    Escolha uma opção:
    1 - Tá com máscara?
    2 - Ônibus
    3 - Vai para Festa?
    4 - Vai para o Bar
    5 - Ida ao Mercado?
    6 - Visitar a Vovozinha 
    7 - Status
    0 - Sair
    `)
   let opcao = +prompt("***** Digite sua escolha *****:\n ");
    if (opcao == 1) {
        console.log("Parabéns! Como você tá seguindo o protocolo, ganhou 5 vidas.\n");
        personagem.avancaTempo(1);
        personagem.mostrarhora()
        personagem.mudarVida(5);
        personagem.mostrarVida();
    } else if (opcao == 2) {
        console.log("Você escolheu ir de Ônibus lotado. Foi contaminado e passou para 100 pessoas, perdeu 3 vidas\n");
        personagem.avancaTempo(1);
        personagem.mostrarhora()
         personagem.mudarVida(-3);
        personagem.mostrarVida();
    } else if (opcao == 3) {
        console.log("Você foi irresponsável, perdeu 5 vidas\n");
        personagem.avancaTempo(1);
        personagem.mostrarhora();
        personagem.mudarVida(-5);
        personagem.mostrarVida();
    } else if (opcao == 4) {
        console.log("Você foi irresponsável, perdeu 4 vidas\n")
        personagem.avancaTempo(1);
        personagem.mostrarhora();
        personagem.mudarVida(-4);
        personagem.mostrarVida();
    } else if (opcao == 5) {
      console.log("Você ainda não aprendeu que nesse momento precisamos manter o isolamento social, online é a melhor opção para compras. Como foi sozinho para o Mercado, só perdeu 2 vidas\n");
      
        personagem.avancaTempo(1);
        personagem.mostrarhora();
        personagem.mudarVida(-2);
        personagem.mostrarVida();
    } else if (opcao == 6) {
        console.log("Você foi irresponsável!\nÉ muito importante manter o isolamento social.\nAme a Vida!!!\n.Perdeu 5 vidas\n");
        personagem.avancaTempo(1);
        personagem.mostrarhora();
        personagem.mudarVida(-5);
        personagem.mostrarVida()
    } else if (opcao == 7) {
        personagem.status(vidas);
      return
    } else if (opcao == 0) {
      personagem.mostarTotalVidas();
      personagem.status(vidas);    
      return
    } else {
        console.log("Opção inválida!")

       
    }
}
}
}
continuar = prompt("\nFim de jogo!\nÉ hora de pensar coletivo.\nCuide-se, a pandemia não acabou!\nDeseja continuar? (Resp. S / N):\n").toUpperCase()
}while(continuar ==="S") {

if(continuar ==="N"){
  console.log("**************************************************************\nO distanciamento e o isolamento social são provisórios e necessários para reduzir a propagação do vírus. Mantenha distância mínima de um metro e meio entre pessoas em lugares públicos e de convívio social, sempre usando máscaras.\n**************************************************************");
  
}
}


