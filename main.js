// ​​Traccia 1:
// ​​Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.
// ​​Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
// ​​ogni dado ha 6 facce
// ​​ogni giocatore tirerà il dado n volte 
// ​​Per ogni giocatore:
// ​​generare un numero casuale per ogni tiro che effettuera’,
// ​​ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.
// ​​TIPS:
// ​​Usiamo questa formula per generare un numero random → Math.floor(Math.random() * (6 - 1) + 1);


let tiriTotali = parseInt(prompt("devi effettuare due tiri"));
let utente1 = 0;
let utente2 = 0;



    for (let i = 1; i <= tiriTotali; i++) {
        utente1=Math.floor(Math.random() * (6 - 1) + 1);
        utente2=Math.floor(Math.random() * (6 - 1) + 1);
        // pui vedere i num dei dadi
        console.log(Math.floor(Math.random() * (6 - 1) + 1));
        console.log(Math.floor(Math.random() * (6 - 1) + 1));
    
    
    }
    console.log(utente1,utente2);

//     Traccia 2:
// Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:

// - N dovra’ rappresentare il parametro formale della funzione
// - tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// - tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// - e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'



function numeri(n) {
    for (let i = 1; i < n; i++) {
        if(i % 3 == 0){
            console.log("fizz");
        }else if (i % 5 == 0) {
            console.log("buzz");  
        }else if (i % 15 == 0) {
            console.log("fizzbuzz");
        }   
        }
    }

    numeri(50);



// Traccia 3:
// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato. Esempio:
// Input : 9 → output: 1 cifra
// Input : 99 → output: 2 cifre
// Input: 12000 → output: Numero troppo grande

function num(cifre) {
    

if (cifre <=9) {
    console.log(" numero di 1 cifra");
}else if(cifre <=99){
    console.log("numero di 2 cifre");
}else if (cifr <= 999) {
    console.log("numero di 3 cifre");
}else {
    console.log("numero troppo grande");
}
}

num(56)





// Traccia 4
// Dato il seguente array mischiato e confuso:

// let array_1 = [
// ['un', 'per', 'incatenarli.'],
// ['Anello', 'trovarli,'],
// ['ghermirli', 'e'],
// ['gondor', 'mark'],
// ];

// let array_2 = [
// [['trovarli,']],
// ['tu,', 'sciocchi'],
// ['tu,', 'sciocchi', ['padron', 'Sauron']],
// ['nel', ['fuggite', 'gandalf']],
// [['domarli,', 'passare'], 'buio']
// ];

// Stampa a schermo la frase: "Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.“
let array_1 = [
    ['un', 'per', 'incatenarli.'],
    ['Anello', 'trovarli,'],
    ['ghermirli', 'e'],
    ['gondor', 'mark'],
    ];

    let array_2 = [
        [['trovarli,']],
        ['tu,', 'sciocchi'],
        ['tu,', 'sciocchi', ['padron', 'Sauron']],
        ['nel', ['fuggite', 'gandalf']],
        [['domarli,', 'passare'], 'buio']
        ];
        console.log(array_1[0][0], array_1[1][0], array_1[0][1], array_2[4][0][0], array_1[0][0], array_1[1][0],array_1[0][1], array_2[0][0][0],array_1[0][0], array_1[1][0], array_1[0][1], array_1[2][0], array_1[2][1], array_2[3][0], array_2[4][1][0], array_1[0][2]);

//         Traccia 5 - EXTRA
// Creare una funzione parametrica che permetta all’utente di indicare un numero (parametro), che rappresenta il numero di elementi di un array.
// Tale numero ci servirà per creare un array, formato da numeri casuali compresi tra 1 e 100.
// Una volta generato l’array, eseguirà la somma degli elementi dello stesso array