/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

/* <div class="boxes"></div> 
    <span> numero </span> */

//inizio la funzione per creare un quadrato
//aggiungere il tag div 
//aggiungo la classe del mio quadrato

function createNewBox (content){
    const newBox = document.createElement('div');
    newBox.classList.add('boxes');
    newBox.innerHTML = '<span>' + content + '</span>'; 
    return newBox;

}
// console.log(createNewBox('ciao'))

const elBox = document.getElementById('box');
console.log( typeof elBox)

//genero un ciclo per creare i quadrati
for(let i=1; i <=100 ; i++){

    let generateBox = createNewBox(i);
    // elBox.append(newBox);

}