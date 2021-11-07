const express = require('express')
const router = express.Router()

router.use((req,res,next) => {
  if(!req.session.initialised){
    req.session.initialised = true
    req.session.email = ''
    req.session.cart = []
    req.session.inventory = []
  }
  next()
})

router.get('/me',(req,res) => {
  res.json(req.session.email)
})

router.get('/shop',(req,res) => {
  const data = require('../data/data.js')
  res.json(data)
})

router.get('/cart',(req,res) => {
  res.json(req.session.initialised)
})

router.get('/shop/:productId',(req,res) => {
  res.json(req.session.cart)
})

router.put('/shop/:productId',(req,res) => {
  req.session.cart.push(Number(req.params.productId))
  req.session.cart.sort()
  res.json({message:"success"})
})

router.put('/unshop/:productId',(req,res) => {
  const cart = req.session.cart
  if(cart.includes(req.params.productId)){
    req.session.cart.splice(cart.indexOf(req.params.productId),1)
  }
  req.session.cart.sort()
  res.json({message:"success"})
})

router.put('/drop/:productId',(req,res) => {
  const inventory = req.session.inventory
  if(inventory.includes(req.params.productId)){
    req.session.inventory.splice(inventory.indexOf(req.params.productId),1)
  }
  req.session.inventory.sort()
  res.json({message:"success"})
})

router.post('/buy',(req,res) => {
  for(var i in req.session.cart){
    req.session.inventory.push(req.session.cart[i])
  }
  req.session.inventory.sort()
  req.session.cart = []
  res.json({message:"success"})
})

module.exports = router