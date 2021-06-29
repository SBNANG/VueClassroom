const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./config/db.config')

const app = express()

let apiversion = '/api/v1'
let port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

app.post(apiversion + '/author', (req, res) => {
  let authorFirstName = req.body.authorFirstName
  let authorLastName = req.body.authorLastName

  res.setHeader('Content-Type', 'application/json')
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  db.query(
    `INSERT INTO authors (authorFirstName, authorLastName) VALUES ('${authorFirstName}', '${authorLastName}')`,
    (error, results, fields) => {
      if (error) throw error
      return res.send({ error: false, message: 'Insert new author' })
    }
  )
})

app.listen(port, function () {
  console.log('Server is up and running...')
})
