const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars').engine;
const morgan = require('morgan');
const route = require('./routes');
const app = express();
const port = 8080;

// với dạng form có middleware như này
app.use(
      express.urlencoded({
        extended: true,
    }),
);
// với dạng code gửi từ js lên
app.use(express.json());

// render ra file tĩnh(ảnh, css,..)
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
      app.use(morgan('combined'));

// Template engine
      app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
    app.set('view engine',
     'hbs');
              app.set('views', path.join(__dirname, 'resources/views'));
// console.log(path.join(__dirname))

// Routes init
    route(app);
// 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
