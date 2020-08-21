const Koa = require('koa');
const cors = require('@koa/cors');

const app = new Koa();
app.use(cors());


// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(3000);