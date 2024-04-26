const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars').engine
const morgan = require('morgan')
const app = express()
const port = 3000

// render ra file tĩnh(ảnh, css,..)
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))
console.log(path.join(__dirname))

app.get('/', (req, res) => {
  return res.render('home');
})

app.get('/news', (req, res) => {
  return res.render('news');
})

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})