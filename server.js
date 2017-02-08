process.env.TZ = 'UTC'

const express = require('express')
const app = express()

app.use('/:date', (req, res) => {
  var param = req.params.date
  var date = Number.isInteger(Number(param)) ? new Date(Number(param)) : Date.parse(param)
  var responseObject = {
    unix: '',
    natural: ''
  }
  if (isNaN(date)) {
    responseObject.unix = null
    responseObject.natural = null
  } else {
    if (Number(param)) {
      let dateString = date
      let year = dateString.getFullYear()
      let month = dateString.toLocaleString('en-us', { month: 'long' })
      let day = dateString.getDate()
      responseObject.unix = Number(param)
      responseObject.natural = `${month} ${day}, ${year}`
    } else {
      let dateString = new Date(date)
      let year = dateString.getFullYear()
      let month = dateString.toLocaleString('en-us', { month: 'long' })
      let day = dateString.getDate()
      responseObject.unix = date
      responseObject.natural = `${month} ${day}, ${year}`
    }
  }
  res.send(responseObject)
})

var port = process.port || 3000

app.listen(port)
