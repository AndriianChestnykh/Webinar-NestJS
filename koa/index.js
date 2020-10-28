const Koa = require('koa');
const app = new Koa();
const Handler = require('./handler');

const handler = new Handler();

app.use(async ctx => {
  ctx.body = handler.getConfig();
});

app.listen(3000);
