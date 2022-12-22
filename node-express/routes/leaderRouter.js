// THIS IS THE ROUTER FOR /leader. If nothing has been attached, we will go with the first route but if its /leader/something, then we will go for the specific route defined.

const express = require('express');
const bodyParser = require ('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route ('/')
.all( (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next(); 
 })
 .get( (req,res,next) =>{
     res.end ('Will send all leader to uuu');
 })
.post ( (req,res,next) => {
     res.end ('will add your retarded looking leader to the database ' + req.body.name + 'with details' + req.body.description);
 }) 
.put ( (req,res,next) => {
     res.statusCode = 403;
     res.end ('PUT not supported pn /leader bro');
 })
.delete ( (req,res,next) => {
     res.end ('deleting all the leader. yess alll of them');
 });


 leaderRouter.route ('/:dishId')
.all( (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next(); 
 })
 .get( (req,res,next) =>{
     res.end ('Will send ' + req.params.dishId +' dish to uuu');
 })
.post ( (req,res,next) => {
     res.end ('will add your retarded looking leader (' + req.params.dishId + ') to the database ' + req.body.name + 'with details' + req.body.description);
 }) 
.put ( (req,res,next) => {
     res.statusCode = 403;
     res.end ('PUT not supported pn /leader bro');
 })
.delete ( (req,res,next) => {
     res.end ('deleting all the leader. yess alll of them');
 });

//extra dish router in case user inputs two / after leader.

leaderRouter.route ('/:dishId/:dishNum')
 .all( (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next(); 
 })
 .get( (req,res,next) =>{
     res.end ('Will send ' + req.params.dishId +' dish to uuu with name ' + req.params.dishNum);
 });

 module.exports = leaderRouter;