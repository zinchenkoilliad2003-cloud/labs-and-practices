const baseUrl = "https://img.pokemondb.net/sprites/black-white/anim/normal/";
const pokemons = [
  "pikachu", "bulbasaur", "charmander", "squirtle", 
  "eevee", "meowth", "jigglypuff", "psyduck", 
  "snorlax", "gengar", "totodile", "chikorita"
];

const scene = document.getElementById('scene');
const pkmnEl = document.getElementById('pokemon-wrapper');

let isOut = false;
let isAnimating = false;

scene.addEventListener('click', () => {
  if (isAnimating) return;

  if (!isOut) {
    isAnimating = true;
    
    const randomPoke = pokemons[Math.floor(Math.random() * pokemons.length)];
    pkmnEl.style.setProperty('--poke-image', `url('${baseUrl}${randomPoke}.gif')`);
    
    pkmnEl.classList.remove('return');
    void pkmnEl.offsetWidth; // reflow
    pkmnEl.classList.add('exit');

    setTimeout(() => {
      isOut = true;
      isAnimating = false;
    }, 2500);

  } else {
    isAnimating = true;

    pkmnEl.classList.remove('exit');
    void pkmnEl.offsetWidth;
    pkmnEl.classList.add('return');
    
    setTimeout(() => {
      isOut = false;
      isAnimating = false;
    }, 1500);
  }
});