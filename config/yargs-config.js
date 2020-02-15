// PRE-SETS
const config = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};


// REQUIREDS
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', config)
    .command('crear', 'Imprime en fichero la tabla de multiplicar', config)
    .help()
    .argv;


// EXPORTS
module.exports = {
    argv
};