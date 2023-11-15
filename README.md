# Campo Minato

## Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Logica

Per iniziare mi preparo una base di html, nella quale avró 3 container all'interno del `body`, un `header` con titolo e pulsante per iniziare a giocare, un `main` con all'interno la griglia di gioco vera e propria ed infine un `footer` con gli autori (noi).

Dopo aver sistemato queste cose aggiungo la griglia vera e propria all'interno del `main`, con javascript.
Scrivo una funzione che mi aggiunga un elemento all'interno del `div` la funzione avrá come obbiettivo:

- Aggiungere l'elemento quadrato al contenitore nel `main`
- Aggiungere un contenuto a questo elemento
- Impostargli una classe

Dopo aver fatto la griglia completa dei 100 elementi scrivo una funzione che ha lo scopo di selezionare al click uno degli elementi che il ciclo della funzione precedente mi ha creato.

Quindi, all'evento `click` il colore del quadrato selezionato cambia e viene scritto il suo contenuto con un `console.log`.
