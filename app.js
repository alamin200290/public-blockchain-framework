const express = require('express');
const app = express();



app.get('/', (request, response)=>{
	response.send('welcome! Explore your blockchain knowledge with our custom made public blockchain framework!!! ');
})


app.listen(3000, ()=>{
	"server started at ...3000";
});