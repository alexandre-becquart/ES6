/* -------------------------------------------------------------------------- */
/*                                  config.js                                 */
/* -------------------------------------------------------------------------- */

import api from '../modules/config'; //importer la variable  de config.js dans ce fichier pour pouvoir l'utiliser
import { url, sayHi } from '../modules/config'; // imports nomé

import api, { sayHi, url as website } from '../modules/config'; // tout importer en une ligne 
import api, { disBonjour, url as website } from '../modules/config'; // tout importer en une ligne 
import { uniq } from 'lodash';

console.log(api, website);

disBonjour("Anissa")

const chiffres = [1, 2, 5, 6, 4, 2, 1, 8, 9, 6, 3, 4, 3]

console.log(uniq(chiffres));

/* -------------------------------------------------------------------------- */
/*                                    user                                    */
/* -------------------------------------------------------------------------- */



import User, { createUrl, gravatar } from '../modules/user';

const ani = new User("Anissa Belkheir", "anissa@triptyk.eu", "http://truptyk.eu")

console.log(ani);

const website = createUrl(ani.name)

console.log(website);

const photo = gravatar(ani.email);
console.log(photo);