/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                     Différence synchrone et asynchrone                     */
/* -------------------------------------------------------------------------- */


const somme = (num1, num2) => num1 + num2;
console.log(somme(1, 2));

// le résultat s'affiche tout de suite => fonction synchrone

const showImg = img => {
    const image = document.createElement('img');
    image.src = img;
    image.alt = "Grosse immage";
    image.id = "image";
    document.querySelector('div').appendChild(image)
}

showImg("https://cdn.discordapp.com/attachments/644850288624140298/649921845235286035/stars-and-clouds-at-nighttime-1229042.jpg")
console.log(document.querySelector('#image').height);
// le résultat ne s'affiche pas tout de suite => fct asynchrone 

setTimeout(() => {
    console.log(console.log(document.querySelector('#image').height));
}, 2000)

/* -------------------------------------------------------------------------- */
/*                       Exemple avec une custom promise                      */
/* -------------------------------------------------------------------------- */

// breath(1000, function () {
//     breath(500, function () {
//         breath(1000, function () {
//             breath(900, function () {

//             })
//         })
//     })
// })

// function breath(duree) {
//     return new Promise((resolve, reject) => {
//         duree > 500 ?
//             reject(Error('Erreur : pas assez long')) :
//             resolve(`Durée le a respiration : ${duree}ms`)
//     })
// }

// breath(1000)
//     .then(response => {
//         console.log(response);
//         return breath(800)
//     })
//     .then(response => {
//         console.log(response);
//         return breath(900)
//     })
//     .then(response => {
//         console.log(response);
//         return breath(400)
//     })
//     .catch(err => console.error(err))

/* -------------------------------------------------------------------------- */
/*                    faire la même chose avec async await                    */
/* -------------------------------------------------------------------------- */

/* -------- permet d'attendre la résolution d'une promesse (Promise). ------- */
/* ------ Il ne peut être utilisé qu'au sein d'une fonction asynchrone ------ */
/* -------------- (définie avec l'instruction async function). -------------- */

// setInterval(() => {
//     console.log(Date.now());
// }, 1000);

function breath(duree) {
    return new Promise((resolve, reject) => {
        if (duree < 500) { reject(Error('Perdu ! Pas assez longtemps !')) }
        setTimeout(() => { resolve(`Durée de la respiration = ${duree}ms`) }, duree);
    })
}

// await breath(1000);
// await breath (900);

/* -------------------------------- Methode 1 ------------------------------- */

// async function go() {
//     console.log('start');
//     console.log(await breath(1000));
//     console.log(await breath(900));
//     console.log(await breath(1200));
//     console.log(await breath(400));
//     console.log('end');

// }

// go()

/* -------------------------------------------------------------------------- */


/* -------------------------------- Methode 2 ------------------------------- */

// async function go() {
//     try {

//         console.log('start');
//         console.log(await breath(1000));
//         console.log(await breath(900));
//         console.log(await breath(1200));
//         console.log(await breath(400));
//         console.log('end');
//     } catch{
//         console.error('Oh nooooooooooon');
//         console.error(err);
//     }

// }

// go()

/* -------------------------------------------------------------------------- */


// async function go() {
//     console.log('start');
//     console.log(await breath(1000));
//     console.log(await breath(900));
//     console.log(await breath(1200));
//     console.log(await breath(400));
//     console.log('end');

// }

// function catchError(fn) { // je crée une fonction qui attend un fct en argument
//     return function () {
//         // console.log(fn); // comme si je faisais clg go 
//         // return fn() // comme si je faisais go()
//         return fn().catch(err => console.error(err))
//         // aquivalent de return go().catch(err => console.error(err))
//     }
// }

// const fctEntouree = catchError(go)

// fctEntouree();


/* -------------------- Si je veux insérer des arguments -------------------- */

async function go(prenom, nom) {
    console.log('start, bonjour' + prenom + " " + nom);
    console.log(await breath(1000));
    console.log(await breath(900));
    console.log(await breath(1200));
    console.log(await breath(400));
    console.log('end');

}

function catchError(fn) { // je crée une fonction qui attend un fct en argument
    return function (...args) { // ...REST
        // console.log(fn); // comme si je faisais clg go 
        // return fn() // comme si je faisais go()
        return fn(...args).catch(err => console.error(err))
        // equivalent de return go().catch(err => console.error(err)) // ...Spread
    }
}

const fctEntouree = catchError(go)

fctEntouree("Anissa", "Belkheir");



/* ---------------------------------- ASYNC --------------------------------- */

// Tant que cette fct n'est pas fini tu ne fait plus rien 

/* -------------------------------------------------------------------------- */


/* ---------------------------------- AWAIT --------------------------------- */

// une fois que cette fct est terminée  fait la fct suivante - Attend

/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/*                                   Exemple                                  */
/* -------------------------------------------------------------------------- */

// async function go() {
//     const p1 = fetch("http://api.github.com/user/wesbos")
//     const p2 = fetch("http://api.github.com/user/stolinski")
//     //j'attends que tous les deux résultats reviennent : 

//     const rest = await Promise.all([p1, p2]);
//     const datasPromise = rest.map(response => response.json())
//     const [wes, scott] = await Promise.all(datasPromise)

//     console.log(wes);
//     console.log(scott);
// }

// go()

/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                   Exemple                                  */
/* -------------------------------------------------------------------------- */

async function getDatas(names) {
    const promises = names.map(n => {
        return fetch(`https://api.github.com/users/${n}`)
            .then(r => r.json());
    });
    const people = await Promise.all(promises);
    console.log(people);
}

getDatas(["wesbos", "stolinski"])

