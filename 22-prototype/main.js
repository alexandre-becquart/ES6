/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   Module                                   */
/* -------------------------------------------------------------------------- */

function Dog(nom, race) {
    this.nom = nom;
    this.race = race;
}

Dog.prototype.aboyer = function () {
    console.log(`Wouf! Wouf! je m'appelle ${this.nom}"`);
}

const rex = new Dog('Rex', "Berger Allemand")
const ulrok = new Dog('Ulrok', "Leonberg")
rex.aboyer();
ulrok.aboyer();

console.log(ulrok);

Dog.prototype.caliner = function () {
    console.log('Slup!');
}

ulrok.caliner()

/* -------------------------------------------------------------------------- */
/*                                  héritage                                  */
/* -------------------------------------------------------------------------- */

function Animal(nom) {
    this.nom = nom;
}

Animal.prototype.marche = function () { // on donne une base - on crée un protyotype
    console.log(`${this.nom} est en train de marcher`);
}

function Cat(nom, race) {
    Animal.call(this, nom)
    this.race = race;
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.miaule = function () {
    console.log("miaou!");
}


const felix = new Cat('Felix', "Siamois")

felix.marche();
felix.miaule();

const toutou = new Animal("Snickers");
//toutou.miaule(); // elle ne fonctionne pas car miaul 'a l'héritage de Animal
toutou.marche();

