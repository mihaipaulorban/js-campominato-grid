// FUNZIONI

// Funzione che crea degli elementi con possoibilitá di cambiare tag contenuto o classe
function createElement(tag, content, className) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);

    return element;
}

// PROGRAMMA

// Seleziono il div gameboard
const board = document.querySelector('.gameboard');

// Uso il ciclo for per creare 100 celle all'interno del div
for (i = 1; i <= 100; i++){
    const myElement = createElement('div', i, 'cell');
    board.append(myElement)
}