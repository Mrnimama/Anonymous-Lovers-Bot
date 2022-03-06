const Config = require('./config');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./media/' + Config.LANG + '.json')) {
    console.log(
        chalk.green.bold('Loading ' + Config.LANG + ' language...')
    );

    var json = JSON.parse(fs.readFileSync('./media/' + Config.LANG + '.json'));
} else {
    console.log(
        chalk.red.bold('You entered an invalid language. English language was chosen.')
    );

    var json = JSON.parse(fs.readFileSync('./media/EN.json'));
}

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}
