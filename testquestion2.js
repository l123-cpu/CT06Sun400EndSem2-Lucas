let pokemons=["Pikachu", "Raichu","Bulbasaur","Mewtwo"]
let yPos;

function setup(){
    createCanvas(200,300);
    background(220);
    fill('pink');
    textAlign(CENTER,CENTER);
    textSize=20;
    yPos+=40;
    for(let i=0; i<pokemons.length;i++){text(pokemons[i],width-100,yPos)};
    yPos=100;
}


