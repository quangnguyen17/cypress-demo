module.exports = (on, config) => {
  require('cypress-terminal-report/src/installLogsPrinter')(on)
}
