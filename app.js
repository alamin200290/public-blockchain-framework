var express = require('express');
var app = express();

//configuration
app.set('view engine', 'ejs');


//routing
app.get('/', (request, response)=>{
	response.send('welcome! Explore your blockchain knowledge with our custom made public blockchain framework!!! ');
})


//server startup
app.listen(3000, ()=>{
	"server started at ...3000";
});