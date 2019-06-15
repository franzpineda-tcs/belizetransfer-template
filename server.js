const express = require('express'),
server = express(),
port = 3000,
router = require('./src/routes/routes')

server.use(express.static('public'))
server.use('/',router)

server.set('view engine','ejs')

//handle 404 requests
server.use(function (req, res, next) {
    res.status(404).render('index',{
        page:'404'
    })
  })
  
server.listen(port,()=>{console.log(`[+] server started on port: ${port}...`)})