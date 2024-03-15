/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/* <div class="boxes"></div> */

//creo la variabile per prendere il bottone
let bottone = document.querySelector('.btn');

//aggiungo l'evento di ascolto al bottone
bottone.addEventListener('click', function()) {

    //prendo il mio elemento da html
    let elBox = document.getElementById('box');

    //aggiungo la classe boxes 
    elBox.classList.add ('.boxes', 'd-inline');



}