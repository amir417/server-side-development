// THIS IS THE ROUTER FOR /promo. If nothing has been attached, we will go with the first route but if its /promo/something, then we will go for the specific route defined.

const express = require('express');
const bodyParser = require ('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route ('/')
.all( (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next(); 
 })
 .get( (req,res,next) =>{
     res.end ('Will send all promo to uuu');
 })
.post ( (req,res,next) => {
     res.end ('will add your retarded looking promo to the database ' + req.body.name + 'with details' + req.body.description);
 }) 
.put ( (req,res,next) => {
     res.statusCode = 403;
     res.end ('PUT not supported pn /promo bro');
 })
.delete ( (req,res,next) => {
     res.end ('deleting all the promo. yess alll of them');
 });


 promoRouter.route ('/:dishId')
.all( (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next(); 
 })
 .get( (req,res,next) =>{
     res.end ('Will send ' + req.params.dishId +' dish to uuu');
 })
.post ( (req,res,next) => {
     res.end ('will add your retarded looking promo (' + req.params.dishId + ') to the database ' + req.body.name + 'with details' + req.body.description);
 }) 
.put ( (req,res,next) => {
     res.statusCode = 403;
     res.end ('PUT not supported pn /promo bro');
 })
.delete ( (req,res,next) => {
     res.end ('deleting all the promo. yess alll of them');
 });

//extra dish router in case user inputs two / after promo.

promoRouter.route ('/:dishId/:dishNum')
 .all( (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next(); 
 })
 .get( (req,res,next) =>{
     res.end ('Will send ' + req.params.dishId +' dish to uuu with name ' + req.params.dishNum);
 });

 module.exports = promoRouter;