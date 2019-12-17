/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 Some Every                                 */
/* -------------------------------------------------------------------------- */


const age = [32, 15, 19, 12]

/* --------------------------------- .some() -------------------------------- */
/* -------------- si un des éléménents existe sous la condition ------------- */

// est-ce que qu'il y a au moins un adulte dans le groupe ?

const adulte = age.some(function (age) {
    return age > 18;
})

// il renvoie une réponse true ou false

console.log(adulte);

/* -------------------------------------------------------------------------- */


/* -------------------------------- .every() -------------------------------- */
/* ------------- si chaques éléments existent sous la condition ------------- */

//est ce qu'ils sont tous en age de boire

const boire = age.every(function (age) {
    return age > 18;
})

// il renvoie une réponse true ou false


console.log(boire);

/* -------------------------------------------------------------------------- */
