var express = require('express');
var promotionRouter = express.Router();

var bodyParser = require('body-parser');
promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
    .all((req, res, next) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        next();
    })
    .get((req, res, next) => {
        res.end('will send all promotiones to you');
    })

    .post((req, res, next) => {
        res.end('will add  the promotion (' + req.body.name + ') with details (' + req.body.description + 'about the promotion)');
    })
    .put((req, res, next) => {
        res.write('Updating the promotion (' + req.params.promotionId + ')');
        res.end(' Updating the promotion (' + req.body.name + ') with details (' + req.body.description + 'about the promotion)');
    })
    .delete((req, res, next) => {
        res.end('Deleteing all promotiones');
    });

promotionRouter.route('/:promoId')
    .all((req, res, next) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        next();
    })
    .get((req, res, next) => {
        res.end('will send the promotion (' + req.params.promoId + ') to you');
    })
    .put((req, res, next) => {
        res.write('Updating the promotion (' + req.params.promoId + ')');
        res.end(' Updating the promotion (' + req.body.name + ') with details (' + req.body.description + 'about the promotion)');
    })
    .delete((req, res, next) => {
        res.end('Deleteing the promotion (' + req.params.promoId + ')');
    });

module.exports = promotionRouter;