module.exports = class Configuraion {
  constructor() {
    this.environment = process.env.environment;
    this.logger = { log: () => {} }
  }

  setLogger(logger) {
    this.logger = logger;
  }

  getConfig() {
    const config = {
      appName: 'Test Koa app',
      environment: this.environment
    };
    this.logger.log(`Config requested. Returning ${JSON.stringify(config)}`);
    return config;
  }
};
