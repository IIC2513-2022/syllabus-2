const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('/', async (ctx) => {
  await ctx.render('index', { appVersion: pkg.version });
});

module.exports = router;
