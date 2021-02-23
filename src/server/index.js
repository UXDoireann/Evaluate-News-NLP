projectData = {};

const fetch = require("node-fetch");

const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

//start up an instance of app
const app = express();

//install cors
const cors = require('cors');
app.use(cors());

//install bodyparser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded(
    {extended:false}
));
app.use(bodyParser.json());


app.use(express.static('dist'))

console.log(__dirname)

//app.get('/', function (req, res) {
   //  res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
//})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8080!')
})



//API Key
console.log(`Your API key is ${process.env.API_KEY}`);

var textApi = new meaningCloud ({
    application_key: process.env.API_KEY
});

//Get request
//app.get('/test', function (req, res) {
  //  res.send(mockAPIResponse)
//})
app.get('/all', function(req, res){
    res.send(projectData);
    console.log('Get project data');
})

//POST request
app.post('/addData', addData);

function addData(req,res){
    let data = req.body;
    Object.assign(projectData, data);
    res.send(projectData);
    console.log(projectData);
};


