
/**
 * 
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 * 
 */


const nameList = ['pippo', 'PLUTO', 'Paperino'];

const modifa = nameList.map((element) => {
    return element.charAt(0).toLocaleUpperCase() +
        element.substring(1).toLocaleLowerCase();

});


console.log(modifa);


