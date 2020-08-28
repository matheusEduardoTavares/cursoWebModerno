//node já suporta o sistema de módulos
//do ES6, mas não nativamente, temos
//que mudar a extensão.

export default class Pessoa {
    cumprimentar () {
        return 'Bom dia!'
    }
}

//COMMONSJS:
// module.exports = class Pessoa {
//     cumprimentar () {
//         return 'Bom dia!'
//     }
// }

import './modulos/moduloA'