import { express } from 'express';
import { block } from "./block";

//const express = require('express');
//const block = require('./block');

const app = express();
const block =	new block('12head', 'test', '11');	

//configuration
app.set('view engine', 'ejs');


//routing
app.get('/', (request, response)=>{
	response.send(`first block ${block.getHash()}`);
})


//server startup
app.listen(3000, ()=>{
	"server started at ...3000";
});