module.exports = class Logger {
  constructor(configuration) {
    this.shouldLog = configuration.getConfig() === 'debug';
  }

  log(str) {
    if (this.shouldLog) {
      console.log(str);
    }
  }
}
