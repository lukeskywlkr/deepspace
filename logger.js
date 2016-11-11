'use strict'
var exports = module.exports = {};
const chalk = require('chalk');
const winston = require('winston');

exports.error = (message, structMsg) => {
  winston.error(chalk.bgRed(message, JSON.stringify(structMsg)));
  return;
}

exports.warn = (message, structMsg) => {
  winston.warn(chalk.bgYellow(message, JSON.stringify(structMsg)));
  return;
}

exports.info = (message, structMsg) => {
  winston.info(chalk.bgBlue(message, JSON.stringify(structMsg)));
  return;
}

exports.verbose = (message, structMsg) => {
  winston.verbose(chalk.bgGreen(message, JSON.stringify(structMsg)));
  return;
}

exports.debug = (message, structMsg) => {
  winston.debug(chalk.bgBlack(message, JSON.stringify(structMsg)));
  return;
}

exports.silly = (message, structMsg) => {
  winston.silly(chalk.grey(message, JSON.stringify(structMsg)));
  return;
}
