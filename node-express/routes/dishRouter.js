//

const express = require('express');
const bodyParser = require ('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route ('/')
.all( (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next(); 
 })
 .get( (req,res,next) =>{
     res.end ('Will send all dishes to uuu');
 })
 .get( '/:dishId',(req,res,next) =>{
    res.end ('Will send all dishes to uuu');
})
.post ( (req,res,next) => {
     res.end ('will add your retarded looking dishes to the database ' + req.body.name + 'with details' + req.body.description);
 }) 
.put ( (req,res,next) => {
     res.statusCode = 403;
     res.end ('PUT not supported pn /dishes bro');
 })
.delete ( (req,res,next) => {
     res.end ('deleting all the dishes. yess alll of them');
 });


//  dishRouter.route ('/:dishId')
// .all( (req,res,next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     next(); 
//  })
//  .get( (req,res,next) =>{
//      res.end ('Will send ' + req.params.dishId +' dish to uuu');
//  })
// .post ( (req,res,next) => {
//      res.end ('will add your retarded looking dishes to the database ' + req.body.name + 'with details' + req.body.description);
//  }) 
// .put ( (req,res,next) => {
//      res.statusCode = 403;
//      res.end ('PUT not supported pn /dishes bro');
//  })
// .delete ( (req,res,next) => {
//      res.end ('deleting all the dishes. yess alll of them');
//  });

 module.exports = dishRouter;