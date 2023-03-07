let numberPokemon: number = 1;

const imagePokemon: HTMLImageElement = document.querySelector('img')!;

const statsTitles: NodeListOf<HTMLHeadingElement> = document.querySelectorAll('h2');

const statsNumber: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('p');

const divStats = document.getElementById('stats')!;

async function getPokemon(numberPokemon: number) {

    const getData = await fetch(`https://pokeapi.co/api/v2/pokemon/${numberPokemon}`);

    const getDataJson = await getData.json();

    return getDataJson
}

async function writePokemonData(numberPokemon: number) {

    const data = await getPokemon(numberPokemon);

    imagePokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

    const getNameStat = data.stats

    getNameStat.map((elem: any, index: number) => {

        statsTitles[index].innerHTML = elem.stat.name.charAt(0).toUpperCase() + elem.stat.name.slice(1);
        statsNumber[index].innerHTML = elem['base_stat'];
    })
}

writePokemonData(numberPokemon);

function nextPokemon(): Promise<void> {
    return writePokemonData(numberPokemon = numberPokemon + 1)
}

function prevPokemon() {
    if (numberPokemon > 1) {
        return writePokemonData(numberPokemon = numberPokemon - 1)
    } else {
        return
    }
}