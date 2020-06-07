const express = require('express');
const app = express();
const config = {
      port : 7777
}
app.set('views', path.join(__dirname, './views'))
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}));

server = app.listen(config.port, function () {
    console.log('열린 포트 ' + config.port)
});
