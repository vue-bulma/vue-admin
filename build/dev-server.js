const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')

const resolve = file => path.resolve(__dirname, file)

const app = express()

require('./setup-dev-server')(app)

app.use('/assets', express.static(resolve('../client/assets')))
app.use(favicon(resolve('../client/assets/logo@2x.png')))

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
