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

document.querySelector('.btn').addEventListener ('click',function(){
    console.log('clickPlay');
    //const numberCells = parseInt (document.querySelector('#play-select').value);
   clickPlay(100);
})

function clickPlay (numberBoxes){
    const box = document.getElementById('boxWrapper');
    console.log(box);
    box.innerHTML = '';

    for (let i = 0; i < numberBoxes ; i++){

    const newBox = document.createElement('div');
    newBox.classList.add('boxes');

   /* if(numberBoxes === 81){
        newBox.classList.add('boxes','medium')
    }else if (numberBox === 49){
        newBox.classList.add('boxes', 'hard');
    } else {
        newBox.classList.add ('boxes')
    };
*/

    newBox.addEventListener('click', function(){
        newBox.classList.add('clicked');
    });

    const spanContent = document.createElement('span');
    spanContent.append(i + 1);

    newBox.appendChild(spanContent);
    box.appendChild(newBox);
}
}