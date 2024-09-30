const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('This is my server!')
})

app.get('/provinces', function (req, res) {
  const provinces = [
    'Drenthe',
    'Flevoland',
    'Friesland',
    'Gelderland',
    'Groningen',
    'Limburg',
    'Noord-Brabant',
    'Noord-Holland',
    'Overijssel',
    'Utrecht',
    'Zeeland',
    'Zuid-Holland'
  ]
  res.json(provinces)
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
