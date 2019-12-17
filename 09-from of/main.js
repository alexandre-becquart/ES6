/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   From Of                                  */
/* -------------------------------------------------------------------------- */

//const personnes = document.getElementsByTagName(' p'); 
// on selectionne tous les <p>

const personnes = document.querySelectorAll('.personnes p');
// on selectionne tous les <p>

console.log(personnes);
// console.log(Array.from(personnes)); // transformer une nodelist en tableau directement dans le clg

const newPersonnes = Array.from(personnes)
// on convertir personnes en tableau avec Array.from
// const res = personnes.map(person => person.innerText)

const res = newPersonnes.map(person => console.log(person.innerText)); // on boucle dans le nouveau tableu pour afficher les noms 

// for (let i = 0; i < personnes.length; i++) {
//     console.log(personnes[i].innerText);

// }
//console.log(res);

/* ------------------------------ Autre Exemple ----------------------------- */

function caculateTotal() {
    console.log(arguments);
    const newArgument = Array.from(arguments)
    const total = newArgument.reduce((tot, item) => tot + item, 0)
    console.log(total);
}

caculateTotal(15, 68, 65, 987, 648, 642, 45, 62, 84, 4, 6, 599780, 965, 6, 665, 67)


// -------- OF ------------

const tableau = Array.of(12, 23, "reteret", null, undefined, true, 121, 4546)
//const tableau2 = Array.from(12, 23, "reteret", null, undefined, true, 121, 4546)

console.log(tableau);
//console.log(tableau2);


console.log(Array(7)); // un tableau avec 7 espace vide