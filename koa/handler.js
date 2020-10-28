const Configuration = require('./configuration');
const Logger = require('./logger');

module.exports = class AppService {
  constructor() {
    this.configuration = new Configuration();
    this.logger = new Logger(this.configuration);
    this.configuration.setLogger(this.logger);
  }

  getConfig() {
    let config = this.configuration.getConfig();
    this.logger.log(`Got request for configuraion. Returning: ${config}`);
    return JSON.stringify(config);
  }
};
