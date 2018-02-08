var express = require('express');
var dishRouter = express.Router();

var bodyParser = require('body-parser');
dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        next();
    })
    .get((req, res, next) => {
        res.end('will send all dishes to you');
    })

    .post((req, res, next) => {
        res.end('will add  the dish (' + req.body.name + ') with details (' + req.body.description + 'about the dish)');
    })
    .put((req, res, next) => {
        res.write('Updating the dish (' + req.params.dishId + ')');
        res.end(' Updating the dish (' + req.body.name + ') with details (' + req.body.description + 'about the dish)');
    })
    .delete((req, res, next) => {
        res.end('Deleteing all dishes');
    });

dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        next();
    })
    .get((req, res, next) => {
        res.end('will send the dish (' + req.params.dishId + ') to you');
    })
    .put((req, res, next) => {
        res.write('Updating the dish (' + req.params.dishId + ')');
        res.end(' Updating the dish (' + req.body.name + ') with details (' + req.body.description + 'about the dish)');
    })
    .delete((req, res, next) => {
        res.end('Deleteing the dish (' + req.params.dishId + ')');
    });

module.exports = dishRouter;