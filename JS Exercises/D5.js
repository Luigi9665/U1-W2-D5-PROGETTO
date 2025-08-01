/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("____________________________ESERCIZIO 1");
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log("Array con indice", i, pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("____________________________ESERCIZIO 2");
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("____________________________ESERCIZIO 3");
for (let i = pets.length - 1; i >= 0; i--) {
  console.log("Array con indice", i, pets[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("____________________________ESERCIZIO 4");
console.log("Array con tutti gli elementi:", pets);
let primoElemento = pets.shift();
console.log("Array senza il primo elemento:", pets);
pets.push(primoElemento);
console.log("Array con il primo elemento, precedentemente elimanto, spostato nell'ultima posizione:", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

console.log("____________________________ESERCIZIO 5");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
const caratteri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = caratteri.charAt(Math.floor(Math.random() * caratteri.length));
  for (let x = 0; x < 5; x++) {
    cars[i].licensePlate += caratteri.charAt(Math.floor(Math.random() * caratteri.length));
  }
}
console.log(cars);

/* ESERCIZIO 6
Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("____________________________ESERCIZIO 6");

const newcar = function (object) {
  const objectReturn = structuredClone(object[0]);

  while (objectReturn.length > 1) {
    objectReturn.pop();
  }

  return objectReturn;
};

cars.push(newcar(cars));

console.log(cars);

for (let i = 0; i < cars.length; i++) {
  console.log("prima", cars[i].trims);
  cars[i].trims.pop();
  console.log("dopo", cars[i].trims);
}
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("____________________________ESERCIZIO 7");
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("____________________________ESERCIZIO 8");
for (let i = 0; i < cars.length; i++) {
  console.log("Colore:", cars[i].color, "Quindi la prima lettera è:", cars[i].color.charAt(0).toLowerCase());
  if (cars[i].color.charAt(0).toLowerCase() === "b") {
    console.log("Fizz");
  } else console.log("Buzz");
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("____________________________ESERCIZIO 9");
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let i = 0;
while (i < numericArray.length && numericArray[i] !== 32) {
  console.log("il valore dell'array numericArray con indice", "[", i, "]", numericArray[i]);
  i++;
  if (i === numericArray.length) {
    console.log("non c'era alcun numero 32");
  }
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("____________________________ESERCIZIO 10");
const charactersArray = ["g", "n", "u", "z", "d"];
const alfabetoItaliano = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "z"];
const posizioneAlfabeto = [];

for (let i = 0; i < charactersArray.length; i++) {
  console.log(charactersArray[i].toLowerCase());
  switch (charactersArray[i].toLowerCase()) {
    case "a":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "b":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "c":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "d":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "e":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "f":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "g":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "h":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "i":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "l":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "m":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "n":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "o":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "p":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "q":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "r":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "s":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "t":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "u":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "v":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    case "z":
      for (let x = 0; x < alfabetoItaliano.length; x++) {
        if (charactersArray[i].toLowerCase() === alfabetoItaliano[x]) posizioneAlfabeto.push(x + 1);
      }
      break;
    default:
      posizioneAlfabeto.push("non hai posizione nell'alfabeto oppure il valore non era valido.");
  }
}

console.log(posizioneAlfabeto);
