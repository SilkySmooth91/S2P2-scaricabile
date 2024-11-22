// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!


/*-sommare i valori all'interno dell'array con .reduce() o in alternativa estrarre singolarmente tutti i valori con .slice() e poi sommarli;
  -salvare la somma in una nuova variabile;
  -blocco if ponendo come condizione isAmbassador;
  -se true, sconto del 30% sul totale
  -se false, nessuno sconto
  -blocco if sul costo totale del carrello per verificare che sia >100: se true, free shipping, se false, shipping fee.
  */

  let totalCart = 0 
  for (let price of prices) {
    totalCart += price
    console.log(totalCart)
  }
  //let totalCart = prices.reduce((total, item) => total + item, 0); //total è l'accumulatore a cui si somma a ogni iterazione l'oggetto successivo nell'array (item)
  // console.log(totalCart)

  if (utenteCheEffettuaLAcquisto.isAmbassador) {
    totalCart -= (totalCart * 0.30)
    console.log("Prezzo scontato: " + totalCart)
  } else {
    console.log("Prezzo non scontato: " + totalCart)
  }

  
  if (totalCart > 100) {
      shippingCost = 0
  } else {
      let totalPrice = totalCart + shippingCost
      console.log("Il costo totale è " + totalPrice)
  }
  

  let utenti = []
  utenti.push(marco, paul, amy) 
  
  for (let element of utenti) {
    if (element.isAmbassador) {
      console.log(element.name + " " + element.lastName + " è un Ambassador")
    } else {
      console.log(element.name + " " + element.lastName + " non è un Ambassador")
    }
  }

