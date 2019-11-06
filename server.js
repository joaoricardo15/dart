var express = require('express')
	, bodyParser = require('body-parser')	
  , app = express()
  , env = { Local: 0, AWS: 1 }
  , envMode = env.AWS
  , port

app.use(express.static('www'))
app.use(bodyParser.json({limit: '10mb'})) 
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next()
})

//////////////////////////////////////////////////////////
// http server connection
//////////////////////////////////////////////////////////

process.argv.forEach((val, index, array) => { if (val === 'local') { envMode = env.Local } })
  
if (envMode === env.Local)
	port = 1000
else
	port = process.env.PORT

app.listen(port, function (error) {
    if(!error)
        console.log('Find server is listen to port: ' + port)
    else
			console.log('error on find server inicialization: ' + error)
})

//////////////////////////////////////////////////////////
// http server methods
//////////////////////////////////////////////////////////

app.get('/users', (request, response) => {
	response.send(users)
})

app.post('/user', (request, response) => { 
	response.send({ message: "Éh uz Guri"})
})