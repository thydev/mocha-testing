var koa = require('koa');
var router = require('koa-router')();

var data = require('./user-data');

var app = module.exports = new koa();

router.get('/user', function* () {
    this.body = yield data.users.get();
});

app.use(router.routes());

app.listen(3000);