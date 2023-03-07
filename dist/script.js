"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let numberPokemon = 1;
const imagePokemon = document.querySelector('img');
const statsTitles = document.querySelectorAll('h2');
const statsNumber = document.querySelectorAll('p');
const divStats = document.getElementById('stats');
function getPokemon(numberPokemon) {
    return __awaiter(this, void 0, void 0, function* () {
        const getData = yield fetch(`https://pokeapi.co/api/v2/pokemon/${numberPokemon}`);
        const getDataJson = yield getData.json();
        return getDataJson;
    });
}
function writePokemonData(numberPokemon) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield getPokemon(numberPokemon);
        imagePokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        const getNameStat = data.stats;
        getNameStat.map((elem, index) => {
            statsTitles[index].innerHTML = elem.stat.name.charAt(0).toUpperCase() + elem.stat.name.slice(1);
            statsNumber[index].innerHTML = elem['base_stat'];
        });
    });
}
writePokemonData(numberPokemon);
function nextPokemon() {
    return writePokemonData(numberPokemon = numberPokemon + 1);
}
function prevPokemon() {
    if (numberPokemon > 1) {
        return writePokemonData(numberPokemon = numberPokemon - 1);
    }
    else {
        return;
    }
}
