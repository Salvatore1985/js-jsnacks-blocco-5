/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */

const player =
{
    name: "",
    "last name": "",
    age: "",
    "average points": "",
    "average percentages-3": "",

};

player.name = generatePlayCode();
player["last name"] = "Jordan";
player.age = (Math.floor(Math.random() * (45 + 1) - 0) + 0);

player["average points"] = (Math.floor(Math.random() * (50 + 1) - 0) + 0);
console.log("I punti sono ", player["average points"]);
player["average percentages-3"] = (Math.floor(Math.random() * (100 + 1) - 0) + 0);
console.table(player);

function generatePlayCode() {
    return makedId(3) + makeNumbersId(3);
}

console.log(generatePlayCode());

function makedId(length) {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXY";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));

    }
    return result
};

function makeNumbersId(length) {
    let result = "";
    let characters = "1234567890";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));

    }
    return result
};
