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


function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}

var pokeNumber = queryString("minhaVariavel");

console.log(pokeNumber);

 createPokemon(pokeNumber);