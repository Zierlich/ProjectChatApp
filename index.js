var express = require('express')
var app = express()
// … Configure Express, and register necessary route handlers
srv = app.listen(3000,function(){console.log("listening to port 3000 on localhost");})
app.use('/peerjs', require('peer').ExpressPeerServer(srv, {
	debug: true
}))