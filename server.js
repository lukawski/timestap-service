process.env.TZ = 'UTC'

const express = require('express')
const app = express()

app.get('/:date', (req, res) => {
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
      let dateString = new Date(Number(param))
      let year = dateString.getFullYear()
      let month = dateString.toLocaleString('en-us', { month: 'long' })
      let day = dateString.getDate()
      console.log(day)
      responseObject.unix = Number(param)
      responseObject.natural = `${month} ${day}, ${year}`
    }
  }
  res.send(responseObject)
})

app.listen(3000)
