const Koa = require("koa");
const app = new Koa();

// logger
let today = new Date();
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  const st = ctx.response.get("Start-Time");
  console.log(`${st} ${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  const start_time = new Date().toISOString().split("T");
  await next();
  const ms = Date.now() - start;
  ctx.set("Start-Time", `${start_time}`);
  ctx.set("X-Response-Time", `${ms}ms`);
});

// response

app.use(async (ctx, next) => {
  const url = ctx.request.url;
  if ("/" == ctx.path) {
    ctx.body = "Index Sayfası";
  } else if ("/about" == ctx.path) {
    ctx.body = "Hakkında sayfası";
  } else if ("/contact" == ctx.path) {
    ctx.body = "İletişim sayfası";
  } else {
    await next();
  }
});

app.listen(3000);
