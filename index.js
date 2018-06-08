var chalk = require("chalk");
const log = console.log;

log(chalk.magenta.bgWhite.bold(
    'Hello World ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again'
  ));