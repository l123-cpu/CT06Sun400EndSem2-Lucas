let pokemons=["Pikachu", "Raichu","Bulbasaur","Mewtwo"]
let yPos;

function setup(){
    createCanvas(200,300);
    background(220)
    fill('pink')
    yPos=100

    textAlign(CENTER,CENTER)
    textSize=20
    for(let i=0; i<pokemons.length;i++){text(pokemons[i],width,yPos)};
    yPos+=40
}


