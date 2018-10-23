var express = require('express')
var router = express.Router()

router.get('/sloths', (req, res, next) => {
  res.send({})
})

router.get('/sloths/:id', (req, res, next) => {
  res.send({})
})

router.post('/sloths', (req, res, next) => {
  res.send({})
})

router.put('/sloths', (req, res, next) => {
  res.send({})
})

router.delete('/sloths', (req, res, next) => {
  res.send({})
})

module.exports = router
