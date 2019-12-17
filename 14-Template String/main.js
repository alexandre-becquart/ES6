/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               Template String                              */
/* -------------------------------------------------------------------------- */

// const nom = "Monia"
// const city = "Tervuren"

// console.log("Ma soeur " + nom + " habite à " + city);

// console.log(`ma soeur ${nom} habite à ${city}`);  //backticks

// const text = "Ceci est un \
// text sur \
// plusieurs ligne "

// const text = `Ceci est un 
// text sur 
// plusieurs lignes `

// console.log(text);


// const person = {
//     name: 'Anissa',
//     job: 'Devoloper',
//     city: 'Mons',
//     bio: 'Anissa is the best formatirice ever',
// }

// const markup = `
// <div class="person">
// <h2>${person.name}</h2>
// <h3>${person.job}</h3>
// <p class = "location">${person.city}</p>
// <p class = "bio">${person.bio}</p>
// </div>
// `
// document.querySelector('#output').innerHTML = markup



/* ------------------------- Exemple avec une boucle ------------------------ */

// const computers = [
//     { "name": "Apple", "ram": 16 },
//     { "name": "IBM", "ram": 6 },
//     { "name": "Tuxedo", "ram": 32 },
// ];

// const markup = `
// <ul>
// ${computers.map(computer => `<li>${computer.name}</li>`).join('')}
// </ul>
// `

// document.querySelector('#output').innerHTML = markup

/* -------------------------------------------------------------------------- */


/* -------------------------------- Exercice -------------------------------- */

// const dogs = [
//     { name: "Snickers", age: 2 },
//     { name: "Hugo", age: 8 },
//     { name: "Sunny", age: 6 },
// ]


// const markup = `
// <ul>
//     ${dogs.map(dog => `<li>Le chien "${dog.name}" et il a ${dog.age} ans</li>`).join('')}
// </ul>
// `
// document.querySelector('#output').innerHTML = markup



/* --------------------------- exemple avec un IF --------------------------- */

// const songs = [
//     {
//         name: 'Dying to live',
//         artist: 'Tupac',
//         featuring: 'Biggie Smalls'
//     },
//     {
//         name: 'Born to be alive',
//         artist: 'Patrick Hernandez'
//     },
//     {
//         name: "Guardian of Asgard",
//         artist: 'Amon Amarth'
//     },
//     {
//         name: "We raise me up",
//         artist: "Susan Boyle",
//         featuring: "Lorie"
//     }
// ]

// const markup = `
// <ul>
// ${songs.map(song => {
//     return `<li>
//     ${song.name} - ${song.artist} </br>
//     ${song.featuring ? `(Featuring ${song.featuring}) ` : ``}

//     </li>`
// }).join('')}
// </ul
// `
// document.querySelector('#output').innerHTML = markup

/* ------------------------ Exemple avec une fonction ----------------------- */

// const beer = {
//     name: "Cuvée des Troll",
//     brewery: "Dubuisson",
//     keywords: ['fruité', 'trouble', 'sucrée', 'amère']
// }


// function renderKeywords(keywords) {
//     return `
//         ${keywords.map(key => `<li>${key}</li>`).join('')}
//     `
// }

// const markup = `
//     <div class="beer">
//         <h2>${beer.name}</h2>
//         <p>${beer.brewery}</p>
//     <ul>
//         ${renderKeywords(beer.keywords)}
//     </ul>
//     </div>
// `

// document.querySelector('#output').innerHTML = markup

/* -------------------------------- Exercise -------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// créer une liste de li contenant ces liens.  contrainte pour générer les li une fonction

/* -------------------------------------------------------------------------- */

/* -------------------------------- Solution -------------------------------- */

// const button = [
//     { text: "TRIPTYK", url: "http://www.triptyk.be" },
//     { text: "Technocite", url: "http://www.technocite.be" },
//     { text: "Ember", url: "http://www.ember.be" },
//     { text: "Glimmer", url: "http://www.glimmer.be" },
// ]

// function liseSite(button) {
//     return `
//     <ul>
//     ${button.map(site => `<li> <a href="${site.url}" target="_blank">${site.text}</a></li>`).join('')}
//     </ul>
//     `
// }

// const markup = `


// ${liseSite(button)}

// `

// document.querySelector('#output').innerHTML = markup

//tagged strings

const name = "Snickers";
const age = 10;
const sentence = hightlight`Mon chien ${name} a ${age * 7} ans`;
// comme la fct est collée aux BackTicks il effectue une fonction spéciale

function hightlight(strings, ...values) {
    //il prend tout les strings et les mets dans un tableau - value il stocke toutes les autres valeurs dans un tableau value (valeur string, tout le rest)
    //debugger
    console.log(strings);
    console.log(values);
    let str = '';
    strings.forEach((string, i) => {
        //str += `${string}<mark>${values[i] || ''}</mark>`
        str += `${string}${values[i] ? '<strong>' + values[i] + '</strong>' : ''}`
    });
    return str
}

document.querySelector('#output').innerHTML = sentence