const Koa = require('koa');
const app = new Koa();
const Handler = require('./handler');

const handler = new Handler();

app.use(async ctx => {
  if (ctx.request.url === '/config') {
    ctx.body = handler.getConfig();
  } else {
    ctx.throw(404, 'Not found!');
  }
});

app.listen(3000);
