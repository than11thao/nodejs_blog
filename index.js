
const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(morgan('combined'))

app.get('/', (req, res) => {
  return res.send('123')
})

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})