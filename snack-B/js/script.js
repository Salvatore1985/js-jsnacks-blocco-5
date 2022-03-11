
/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */

const cars = [
    {
        marca: "ford",
        modello: "fiesta",
        alimentazione: "benzina",
    },
    {
        marca: "ford",
        modello: "puma",
        alimentazione: "diesel",
    },
    {
        marca: "fiat",
        modello: "punto",
        alimentazione: "metano",
    },
    {
        marca: "dacia",
        modello: "duster",
        alimentazione: "gpl",
    },
    {
        marca: "alfa romeo",
        modello: "147",
        alimentazione: "benzina",
    },
    {
        marca: "fiat",
        modello: "500",
        alimentazione: "gpl",
    },
    {
        marca: "alfa romeo",
        modello: "146",
        alimentazione: "diesel",
    },
    {
        marca: "audi",
        modello: "a5",
        alimentazione: "benzina",
    },
    {
        marca: "bmw",
        modello: "serie3",
        alimentazione: "benzina",
    },
    {
        marca: "fiat",
        modello: "barchetta",
        alimentazione: "diesel",
    },
    {
        marca: "alfa romeo",
        modello: "155",
        alimentazione: "benzina",
    },
    {
        marca: "alfa romeo",
        modello: "116",
        alimentazione: "benzina",
    },
];

const benzina = cars.filter((element) => {
    if (element.alimentazione == "benzina") return true

});
console.table(benzina);

const diesel = cars.filter((element) => {
    if (element.alimentazione == "diesel") return true

});
console.table(diesel);

const listaCars = cars.filter((element) => {
    if ((element.alimentazione == "gpl") || (element.alimentazione == "elettrico") || (element.alimentazione == "metano")) return true

});
console.table(listaCars);