/**
 *
 *
    Crea un array di oggetti che rappresentino delle persone.
    Ogni persona ha un nome, un cognome e un'età.
    
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */

const persone = [
   {
      name: "Aldo",
      cognome: "Betti",
      "età": 45,
   },
   {
      name: "Giuseppe",
      cognome: "Rossi",
      "età": 18,
   },
   {
      name: "Nicolino",
      cognome: "Verdi",
      "età": 11,
   },
   {
      name: "Francesco",
      cognome: "Di Mario",
      "età": 66,
      messaggio: "prova",
   },
];

console.table(persone);

const puoiGuidare = persone.filter((element) => {
   if (element["età"] < 18) {
      element.messaggio = "non puoi guidare";

      return element.name + element.cognome + element.messaggio;
   } else {
      element.messaggio = "puoi giudare";
      return element.name + element.cognome + element.messaggio;
   }
});

console.table(puoiGuidare);