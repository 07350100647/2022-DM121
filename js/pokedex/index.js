
const inputsearch = document.getElementById('search');

const inputEle = document.getElementById('search');

inputEle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { // codigo da tecla enter
    if ((this.value > 0) && (this.value <162)){
        // colocas aqui a tua função a rodar
        location.href = "https://07350100647.github.io/2022-DM121/js/pokedex/pokemon.html?minhaVariavel=" + this.value;

        createPokemon(this.value)
    }
  }
});


function myFunction(valor){
    console.log("Apertou o botão"+valor);
}
async function fetchData(pokeNumber) {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + pokeNumber
        );
    const pokemon = await response.json();
    //console.log({ pokemon });
    return pokemon

}

//async function main() {

async function createPokemon(pokeNumber) {
    

    const pokemon = await fetchData(pokeNumber)
    const div = document.createElement('icon')    
    const order = document.createElement('order')
    const name = document.createElement('name')
    const img = document.createElement("img");    
    order.textContent = `#${pokemon.order}`;
    name.textContent = `${pokemon.name}`;
    img.src = pokemon.sprites.front_default;
    div.appendChild(order)
    div.appendChild(img)
    div.appendChild(name)
    document.body.appendChild(div);

    
}


const pokeNumberMax = 62
const pokeNumbers = []

for (i=1; i< pokeNumberMax; i++){
    pokeNumbers.push(i)
}

pokeNumbers.forEach(createPokemon);
//main()