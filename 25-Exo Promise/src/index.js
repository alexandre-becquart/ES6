/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                              Exercices Promise                             */
/* -------------------------------------------------------------------------- */

import Application from "../modules/application" //j'importe application.js dans mon index.js


const newApp = new Application('https://picsum.photos/list'); // je crée une nouvelle instance d'Application en lui donnant l'url du JSON

newApp.loadjson() // je lance la fonction définie dans applications.js sur ma nouvelle instance
    .then(() => { // une fois que tu as terminé de lancer la fct loadjson tu ajoutes à la div le contenu de la fct getAuthors
        document.querySelector('div').innerHTML = newApp.getAuthors()



    })
    .catch(err => console.error(err))
