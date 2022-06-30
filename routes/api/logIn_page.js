const express = require ('express')
const path = require ('path')
const bodyParser = require ('body-parser')
const router = require ('express').Router()


//middleware to decode the body
const app = express()
app.use('/', express.static(path.join(_dirname, 'static')))
app.use(bodyParser.json())

app.post('/api/users/sign_in', async(req, res) => {
    console.log(req.body)
    res.json({ status: 'ok'})

})
