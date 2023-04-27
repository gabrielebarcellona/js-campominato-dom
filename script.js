/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.*/

/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/


const eleGrid = document.querySelector('.grid');
const btnPlay = document.querySelector('#play');
const selectLevel = document.querySelector('#level');
const eleRequest = document.querySelector('.request')
let points = 0

let ArrMines;

btnPlay.addEventListener('click', function () {
    eleRequest.classList.add('hidden');
    eleGrid.classList.add('active');

    let cell = parseInt(selectLevel.value)

    createGrid(cell, eleGrid)

    ArrMines = [];
    for (let i = 0; i < 16; i++) {
        let eleRandomNumber = Math.floor(Math.random() * 100) + 1;
        ArrMines.includes(eleRandomNumber)
        ArrMines.push(eleRandomNumber)
    }
});

function createGrid(cell, eleContainer) {

    eleContainer.innerHTML = '';

    for (let i = 1; i <= cell; i++) {
        const eleCell = document.createElement('div');
        eleCell.innerHTML = i;
        eleCell.classList.add('cell');
        eleContainer.append(eleCell);




        eleCell.addEventListener('click', function () {
            eleCell.classList.add('clicked');
            if (ArrMines.includes(i)) {
                console.log('ritenta!hai perso')
                eleCell.classList.add('mines')

            }
        });
    }
}

