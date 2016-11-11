'use strict'
var exports = module.exports = {};
const _ = require('lodash');
const chalk = require('chalk');
const winston = require('winston');

exports.error = (message, structMsg) => {
  var log = {};
  if(_.isUndefined(structMsg))
    log = {timestamp: new Date().toJSON(), pid: process.pid};
  else
    log = structMsg;
  winston.error(chalk.bgRed(message, JSON.stringify(log)));
  return;
}

exports.warn = (message, structMsg) => {
  var log = {};
  if(_.isUndefined(structMsg))
    log = {timestamp: new Date().toJSON(), pid: process.pid};
  else
    log = structMsg;
  winston.warn(chalk.bgYellow(message, JSON.stringify(log)));
  return;
}

exports.info = (message, structMsg) => {
  var log = {};
  if(_.isUndefined(structMsg))
    log = {timestamp: new Date().toJSON(), pid: process.pid};
  else
    log = structMsg;
  winston.info(chalk.bgBlue(message, JSON.stringify(log)));
  return;
}

exports.verbose = (message, structMsg) => {
  var log = {};
  if(_.isUndefined(structMsg))
    log = {timestamp: new Date().toJSON(), pid: process.pid};
  else
    log = structMsg;
  winston.verbose(chalk.bgGreen(message, JSON.stringify(log)));
  return;
}

exports.debug = (message, structMsg) => {
  var log = {};
  if(_.isUndefined(structMsg))
    log = {timestamp: new Date().toJSON(), pid: process.pid};
  else
    log = structMsg;
  winston.debug(chalk.bgBlack(message, JSON.stringify(log)));
  return;
}

exports.silly = (message, structMsg) => {
  var log = {};
  if(_.isUndefined(structMsg))
    log = {timestamp: new Date().toJSON(), pid: process.pid};
  else
    log = structMsg;
  winston.silly(chalk.grey(message, JSON.stringify(log)));
  return;
}
