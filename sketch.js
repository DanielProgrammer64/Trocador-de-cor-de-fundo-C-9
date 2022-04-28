//aqui vamos definir os principais objetivos do código
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}
//função para executar o desenho desejado no código anterior 
function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  
  if (keyIsDown(RIGHT_ARROW))
  {
    background("red");
    
  }
  
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
  if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

  drawSprites();
}