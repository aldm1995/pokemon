webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This is the database
var pokemonDB = [{
	name: 'charmander',
	type: 'fire',
	hp: 39,
	attack: 52,
	defense: 43,
	level: 1,
	img: 'http://www.smogon.com/dex/media/sprites/xy/charmander.gif'
}, {
	name: 'bulbasaur',
	type: 'fire',
	hp: 45,
	attack: 49,
	defense: 49,
	level: 1,
	img: 'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif'
}, {
	name: 'squirtle',
	type: 'water',
	hp: 44,
	attack: 48,
	defense: 65,
	level: 1,
	img: 'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif'
}];

// state
var gameState = {
	userPokemon: '',
	rivalPokemon: ''
};
console.log(gameState);

// elements
var pokemonsEL = document.querySelector('.select-screen').querySelectorAll('.character');
console.log(pokemonsEL);
var battleScreenEl = document.getElementById('battle-screen');
var attackBtnEL = document.getElementById('battle-screen').querySelectorAll('.attack');
console.log(attackBtnEL);

// initial loop
var i = 0;
while (i < pokemonsEL.length) {
	// add function to all characters on screen select
	pokemonsEL[i].onclick = function () {
		// curent selected pokemon name
		var pokemonName = this.dataset.pokemon;

		// elements for images on battle screen
		var player1Img = document.querySelector('.player1').getElementsByTagName('img');
		var player2Img = document.querySelector('.player2').getElementsByTagName('img');

		// we save the current pokemon
		gameState.userPokemon = pokemonName;

		// cpu pics a pokemon
		cpuPick();
		// change screen to battle scene
		battleScreenEl.classList.toggle('active');

		// select data from current user pokemon
		var currentPokemon = pokemonDB.filter(function (pokemon) {
			return pokemon.name == gameState.userPokemon;
		});
		player1Img[0].src = currentPokemon[0].img;
		// select data from current cpu pokemon
		var currentRivalPokemon = pokemonDB.filter(function (pokemon) {
			return pokemon.name == gameState.rivalPokemon;
		});
		player2Img[0].src = currentRivalPokemon[0].img;

		// user choose attack


		// cpu health goes down

		// cpu attack

		// user health goes down

		// rock > scissors

		// paper > rock

		// scissors > paper

		// depending on pokemon type and defense is how hard the attack is going to be and how much health it takes out

		// then whomeve get to to health  <= 0 loses
	};
	i++;
}
var a = 0;
while (a < attackBtnEL.length) {
	attackBtnEL[a].onclick = function () {
		var attackName = this.dataset.attack;
		gameState.currentUserAttack = attackName;
		console.log(gameState.currentUserAttack);

		play(attackName, cpuAttack());
	};
	a++;
}

var cpuAttack = function cpuAttack() {
	var attacks = ['rock', 'paper', 'scissors'];

	return attacks[randomNumber(0, 3)];
};

var play = function play(userAttack, cpuAttack) {
	switch (userAttack) {
		case 'rock':
			if (cpuAttack == 'paper') {
				console.log('paper kills rock');
			}
			if (cpuAttack == 'scissors') {
				console.log('rock killed paper');
			}
			if (cpuAttack == 'rock') {
				console.log('its a draw');
			}

			console.log(userAttack);
			break;
		case 'paper':
			console.log(userAttack);
			break;
		case 'scissors':
			console.log(userAttack);
			break;
	}
};

var randomNumber = function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

var cpuPick = function cpuPick() {
	gameState.rivalPokemon = pokemonsEL[randomNumber(0, 3)].dataset.pokemon;
};

// pokemon
// create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)


//var attack = 20;
//var level = 10;
//var stack = 1.3;
//var defense = 39;

// create a formula for attacks
//console.log((attack * level ) * stack / 7)


// create a formula for health
//HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
//console.log(((0.20 * Math.sqrt(level)) * stamina) * 15)


// let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// p1 vs p2


// when one user loses all his health declare a winner

/***/ })
],[0]);