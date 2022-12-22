const express = require ('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require ('body-parser')

const hostname = 'localhost';
const port = 3000;


const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req,res,next) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');
   next(); 
});
app.get('/dishes/:dishId', (req,res,next) =>{
    res.end ('Will send '+ req.params.dishId + ' to you.');
});
app.get('/dishes', (req,res,next) =>{
    res.end ('Will send all dishes to uuu');
});

app.post ('/dishes', (req,res,next) => {
    res.end ('will add your retarded looking dishes to the database ' + req.body.name + 'with details' + req.body.description);
});

app.put ('/dishes', (req,res,next) => {
    res.statusCode = 403;
    res.end ('PUT not supported pn /dishes bro');
});

app.delete ('/dishes', (req,res,next) => {
    res.end ('deleting all the dishes. yess alll of them');
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end ('<html><body><h1>hello. express server displayed</h1></body></html>');
});

const server = http.createServer(app);

server.listen (port, hostname, () => {
    console.log (`Server running at http://${hostname}:${port}/`);
});





// const express = require('express'),
//      http = require('http');

// const hostname = 'localhost';
// const port = 3000;

// const app = express();

// app.use((req, res, next) => {
//   console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>This is an Express Server</h1></body></html>');

// });

// const server = http.createServer(app);

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });