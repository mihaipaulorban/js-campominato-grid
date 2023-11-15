// FUNZIONI

// Funzione che crea degli elementi con possoibilitá di cambiare tag contenuto o classe
function createElement(tag, content, className, classNameAdd) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);

      //Event listener che aggiunge un evento click a ogni div creato
      element.addEventListener('click', function() {
        console.log(this.textContent);

        // Aggiunge una classe agli elementi cliccati
        this.classList.add(classNameAdd);
    });

    return element;
}

// PROGRAMMA

const start = document.querySelector('.start');

// Seleziono il div gameboard
const board = document.querySelector('.gameboard');

// Uso il ciclo for per creare 100 celle all'interno del div
for (i = 1; i <= 100; i++){
    const myElement = createElement('div', i, 'cell', 'clickcolor');
    board.append(myElement)


}


start.addEventListener('click', function() {

    // Leva la classe hide e aggiunge la classe show
    board.classList.add('show');
    board.classList.remove('hide');
});