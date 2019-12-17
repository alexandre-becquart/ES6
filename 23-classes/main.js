/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   Classe                                   */
/* -------------------------------------------------------------------------- */

// class declaration
// class Dog {

// }


// class expression  // /!!!!!!!!!!!\ question d'entretien /!!!!!!!!!!!\
// const Dog = class {

// }

/* ------------------------------------ - ----------------------------------- */

// methodes. une seule méthode est obligatoire, c'est le constructeur

// class Dog {
//     constructor(nom, _race) { // elle définit ce qu'il faut faire à la création d'une instance/nouvelle version 
//         this.nom = nom;
//         this._race = _race;
//     }
//     aboyer() {
//         console.log(`WoufWouf je m'appelle ${this.nom} et je suis un ${this._race}`);
//     }
//     caliner() {
//         console.log('Slurp');
//     }

//     static info() {
//         console.log("Un chien c'est 100% mieux qu'un chat !");
//     };

//     // Les méthodes statiques ne sont pas disponibles sur 
//     // les instances d'une classe mais sont appelées 
//     // sur la classe elle-même.

//     set nickname(nick) { // ajouter ou modifier 
//         this.nick = nick;
//     }
//     // permet de lier une propriété d'un objet 
//     // à une fonction qui sera appelée à chaque 
//     // tentative de modification de cette propriété.

//     get nickname() { // rechercher l'information 
//         return this.nick;
//     }

//     set race(_race) {
//         this._race = _race
//     }
// }

// const rex = new Dog('Rex', 'Berger Allemand')
// rex.aboyer();
// rex.caliner();
// // rex.info(); // elle ne peut pas être utilisé car elle est static
// Dog.info()
// rex.nickname = "Trololo"

// document.getElementById('demo').innerHTML = rex.nickname

// rex.race = "Caniche"
// rex.aboyer()

/* -------------------------------------------------------------------------- */
/*                             Etendre des classes                            */
/* -------------------------------------------------------------------------- */

// class Animal {
//     constructor(nom) {
//         this.nom = nom;
//         this.soif = 100;
//         this.bide = [];
//     }
//     boire() {
//         this.soif -= 10;
//         return this.soif
//     }
//     manger(...bouffe) {
//         this.bide.push(...bouffe);
//         return this.bide
//     }
// }


// class Dog extends Animal {
//     constructor(nom, race) {
//         super(nom); // poure récuper le nom dans Animal on crée une instance // si j'oublie cette ligne j'aurai un not defined // super = supérieur
//         this.race = race;
//     }
//     aboyer() {
//         return 'wouaf je suis un chien'
//     };
// }

// const dumbo = new Animal("Dumbo")
// dumbo.manger("légumes", "petit-pois")
// console.log(dumbo);

// //dumbo.aboyer()

// const ulrok = new Dog('Ulrok', 'Leonberg');
// ulrok.boire();
// ulrok.boire();
// ulrok.boire();
// ulrok.boire();
// ulrok.boire();
// ulrok.boire();
// ulrok.boire();
// ulrok.manger("croquettes");

// console.log(ulrok);

// document.getElementById('demo').innerText = ulrok.aboyer()

/* -------------------------------------------------------------------------- */
/*                        étendre des classes par défaut                      */
/* -------------------------------------------------------------------------- */

// class CollectionDeFilms extends Array {
//     constructor(nom, ...items) {
//         super(...items);
//         this.nom = nom;
//     }
//     add(movie) {
//         this.push(movie)
//     }

//     topRated(limit = 3) {
//         return this.sort((a, b) => a.stars > b.stars ? -1 : 1).slice(0, limit)
//     }
// }

// const films = new CollectionDeFilms("Mes films préférés",
//     { name: "White House Down", stars: 5 },
//     { name: "Taken", stars: 9 },
//     { name: "Gladiator", stars: 10 },
//     { name: "Le Hobbit", stars: 8 },
//     { name: "Orgeuil et Préjugés et Zombies", stars: 7 },
//     { name: "Star Wars", stars: 5 },
// )

// console.log(films);

// films.add({ name: "Le seigneur des anneaux", stars: 10 });
// films.add({ name: "Dragons", stars: 7 });
// films.add({ name: "Constantine", stars: 10 });

// console.log(films);

// console.log(films.topRated(4));

// for (const film in films) { // il boucle dans L'ARRAY et l'OBJET
//     console.log(films[film]);
// }

// films.forEach(el => console.log(el)) // il boucle que dans l'ARRAY

/* -------------------------------------------------------------------------- */
/*                                  EXERCICE                                  */
/* -------------------------------------------------------------------------- */

// class Clock {
//     constructor() {
//     }
//     render() {
//         const heure = new Date()

//         const h = (heure.getHours() < 10) ? "0" + heure.getHours() : heure.getHours();
//         const m = (heure.getMinutes() < 10) ? "0" + heure.getMinutes() : heure.getMinutes();
//         const s = (heure.getSeconds() < 10) ? "0" + heure.getSeconds() : heure.getSeconds();

//         const date = `${h} h - ${m} min - ${s} secondes`

//         console.log(date);


//     }
//     stop() {
//         clearInterval(this.setInt)
//     }
//     start() {

//         this.setInt = setInterval(this.render, 1000)
//     }
// }


// const clock = new Clock()

// clock.start();

/* -------------------------------------------------------------------------- */
/*                                 correction                                 */
/* -------------------------------------------------------------------------- */

const { first, twitter } = { tempalte: "" }


class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) { hours = "0" + hours }

        let minutes = date.getMinutes();
        if (minutes < 10) { minutes = "0" + minutes }

        let secondes = date.getSeconds();
        if (secondes < 10) { secondes = "0" + secondes }

        let output = this.template
            .replace('h', hours)
            .replace('m', minutes)
            .replace('s', secondes)
        console.log(output);

        //console.log(hours + ":" + minutes + ":" + secondes);
    }
    stop() {
        clearInterval(this.timer)
    }
    start() {
        this.render; // il démarre tout de suite sinon il attend 1 seconde avant de commencer 
        this.timer = setInterval(() => this.render(), 1000)
    }
}

let clock = new Clock({ template: "hh mm ss" })
//clock.start();


// avec la methode des boutons

document.querySelector('.stop').addEventListener('click', function () { //queryselector il prend le premier qui trouve
    clock.stop()
})

document.querySelector('.start').addEventListener('click', function () {
    clock.start()
})

