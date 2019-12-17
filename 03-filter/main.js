/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   Filter                                   */
/* -------------------------------------------------------------------------- */

/* ------------------------- Filtrer avec une boucle ------------------------ */

const numbers = [15, 25, 35, 45, 55, 65, 85, 95];

// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 50) {
//         filteredNumbers.push(numbers[i])
//     }

// }

// console.log(filteredNumbers);

/* -------------------------------------------------------------------------- */

/* -------------------------------- .filter() ------------------------------- */

const filteredNumbers = numbers.filter(function (item) {

    // if (item > 50) {
    //     return item
    // }

    return item > 50 // écriture simplifiée

})

console.log(filteredNumbers);

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// filter pour ne garder que les admins

const users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
    { id: 6, admin: false }
]

/* -------------------------------- Solution -------------------------------- */

const admins = users.filter(function (item) {
    return item.admin
})

console.log(admins);

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// créer une fonction qui fait l'inverse d'un filter

/* -------------------------------------------------------------------------- */

/* -------------------------------- Solution -------------------------------- */

function contraire(liste, prop, value) {
    //cela fonctionne car c'est un objet - autre manière pour un tableau
    return liste.filter(function (item) {
        return item[prop] != value
    })
}

console.log(contraire(users, "admin", true));

/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// Filtrer les éléments de type number

/* -------------------------------------------------------------------------- */

/* -------------------------------- Solution -------------------------------- */

const ar = [12, "text", true, undefined, null, 25, 36, 'youpla', 325.369455, 56]

function filterAndMultiply(liste, produit) {

    return liste
        .filter(function (item) {
            return typeof item == 'number'
        })
        .map(function (item) {
            return item * produit
        })
}


console.log(filterAndMultiply(ar, 4));

/* -------------------------------------------------------------------------- */

