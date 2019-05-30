'use strict'

const mongoose = require('mongoose')
const config =  require('../Config/config');
const chalk = require('chalk');

mongoose.connect(config.CONNECTIONSTRING, { useNewUrlParser: true } )
    .then(() => console.log( chalk.yellow('The database is connect')))
    .catch((error) => {console.log( chalk.red(error))})

module.exports = mongoose