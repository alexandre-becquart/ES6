/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/application.js":
/*!********************************!*\
  !*** ./modules/application.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Application; });
// https://picsum.photos/list

/* -------------------------------------------------------------------------- */

/*                                 ma version                                 */

/* -------------------------------------------------------------------------- */
class Application {
  // j'exporte  ma class pour pouvoir l'utiliser dans mon index.js
  constructor(url) {
    this.url = url; //il crée une const url qui sera possible d'utiliser partout dans la class - il récupéère l'url donnée dans l'index.js : const newApp = new Application('https://picsum.photos/list');
  }

  loadjson() {
    //FCT pour charger mon fichier json
    const listPict = fetch(this.url); // je récupère un fichier json de l'url grâce à fetch() et je le stock dans une variable

    return new Promise((resolve, reject) => {
      // je retourne une promise avec une solution ok et un refut
      listPict.then(res => res.json()) // je prends mon fichier stocker dans la const listPict et je le convertie en fichier json
      .then(res => {
        // je lui demande de retourner un  resultat stocker dans un fct qui sera dispo dans toute la classe grâce au this.
        this.data = res;
        resolve("c'est ok"); // je lui indique que c'est ok
      }).catch(err => console.error(err)); // je lui indique quoir faire au cas où il y a une erreur
    });
  }

  getAuthors() {
    /* --------------------- liste des auteurs avec doublons -------------------- */
    const liste = this.data.map(item => {
      // je prends la liste stocker dans le this.data et je boucle pour qu'il me retourne chaque auteurs de la liste dans un <li></li>
      // il peut être fait avec un reduce(total,item), dans ce cas pas besoin d'un join("")
      return `<li>${item.author}</li>`; //toujours mettre un return sinon pas de résultat 
    }).join(''); //Je lui ajoute un join, sinon j'ai un "," après chaque élément

    return `<ul> ${liste} </ul>`; //le fait d'avoir stocker mes <li> dans une const, je peux mtn retourner son résultat entre des balise <ul> pour obtenir une liste

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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/application */ "./modules/application.js");
 //j'importe application.js dans mon index.js

const newApp = new _modules_application__WEBPACK_IMPORTED_MODULE_0__["default"]('https://picsum.photos/list'); // je crée une nouvelle instance d'Application en lui donnant l'url du JSON

newApp.loadjson() // je lance la fonction définie dans applications.js sur ma nouvelle instance
.then(() => {
  // une fois que tu as terminé de lancer la fct loadjson tu ajoutes à la div le contenu de la fct getAuthors
  document.querySelector('div').innerHTML = newApp.getAuthors();
}).catch(err => console.error(err));

/***/ })

/******/ });
//# sourceMappingURL=main.js.map