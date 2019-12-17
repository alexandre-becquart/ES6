// https://picsum.photos/list

/* -------------------------------------------------------------------------- */
/*                                 ma version                                 */
/* -------------------------------------------------------------------------- */

export default class Application { // j'exporte  ma class pour pouvoir l'utiliser dans mon index.js

    constructor(url) {
        this.url = url //il crée une const url qui sera possible d'utiliser partout dans la class - il récupéère l'url donnée dans l'index.js : const newApp = new Application('https://picsum.photos/list');
    }

    loadjson() { //FCT pour charger mon fichier json
        const listPict = fetch(this.url) // je récupère un fichier json de l'url grâce à fetch() et je le stock dans une variable

        return new Promise((resolve, reject) => { // je retourne une promise avec une solution ok et un refut

            listPict
                .then(res => res.json()) // je prends mon fichier stocker dans la const listPict et je le convertie en fichier json

                .then(res => { // je lui demande de retourner un  resultat stocker dans un fct qui sera dispo dans toute la classe grâce au this.
                    this.data = res;
                    resolve("c'est ok") // je lui indique que c'est ok
                })
                .catch(err => console.error(err)) // je lui indique quoir faire au cas où il y a une erreur
        })

    }
    getAuthors() {

        /* --------------------- liste des auteurs avec doublons -------------------- */

        const liste = this.data.map(item => {
            // je prends la liste stocker dans le this.data et je boucle pour qu'il me retourne chaque auteurs de la liste dans un <li></li>
            // il peut être fait avec un reduce(total,item), dans ce cas pas besoin d'un join("")

            return `<li>${item.author}</li>`//toujours mettre un return sinon pas de résultat 

        }).join('') //Je lui ajoute un join, sinon j'ai un "," après chaque élément

        return `<ul> ${liste} </ul>` //le fait d'avoir stocker mes <li> dans une const, je peux mtn retourner son résultat entre des balise <ul> pour obtenir une liste

        /* ------------- afficher la liste des auteurs sans les doublons ------------ */

        // let arrayAuthors = []; //je crée un tableau vide pour contenir par la suite mes auteurs
        // const liste = this.data.map(item => {  
        //     arrayAuthors.push(item.author) //je boucle dans la liste stocker dans this.data pour ajouter chaque élément dans mon tableau arrayAuthors[] avec push
        //     // 

        // })
        // arrayAuthors = [...new Set(arrayAuthors)] // je filtre les doublons dans mon tableau avec [...new Set(arrayAuthors)] et le maj en indiquant arrayAuthors = [...new Set(arrayAuthors)]
        // const authores = arrayAuthors.map(item => {
        //     return `<li>${item}</li>` // je boucle dans mon tableau arrayAuthors pour mettre chaque Item dans un <li> et je les strocke dans une variable pour les mettre dans un <ul>

        // }).join('') //Je lui ajoute un join, sinon j'ai un "," après chaque élément

        // return `<ul> ${authores} </ul>` // je mets ma liste stocké dans la const authores pour l'entourer dans un <ul>


    }

}

/* -------------------------------------------------------------------------- */
/*                                 correction                                 */
/* -------------------------------------------------------------------------- */
