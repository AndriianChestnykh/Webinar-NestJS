const Configuration = require('./configuration');
const Logger = require('./logger');

module.exports = class Handler {
  constructor() {
    this.configuration = new Configuration();
    this.logger = new Logger(this.configuration);
    this.configuration.setLogger(this.logger);
    this.testModule(this.configuration);
  }

  getConfig() {
    let config = this.configuration.getConfig();
    this.logger.log(`Got request for configuraion. Returning: ${config}`);
    return JSON.stringify(config);
  }
};
