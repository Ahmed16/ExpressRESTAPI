var express = require('express');
var leaderRouter = express.Router();

var bodyParser = require('body-parser');
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        next();
    })
    .get((req, res, next) => {
        res.end('will send all leaderes to you');
    })

    .post((req, res, next) => {
        res.end('will add  the leader (' + req.body.name + ') with details (' + req.body.description + 'about the leader)');
    })
    .put((req, res, next) => {
        res.write('Updating the leader (' + req.params.leaderId + ')');
        res.end(' Updating the leader (' + req.body.name + ') with details (' + req.body.description + 'about the leader)');
    })
    .delete((req, res, next) => {
        res.end('Deleteing all leaderes');
    });

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        next();
    })
    .get((req, res, next) => {
        res.end('will send the leader (' + req.params.leaderId + ') to you');
    })
    .put((req, res, next) => {
        res.write('Updating the leader (' + req.params.leaderId + ')');
        res.end(' Updating the leader (' + req.body.name + ') with details (' + req.body.description + 'about the leader)');
    })
    .delete((req, res, next) => {
        res.end('Deleteing the leader (' + req.params.leaderId + ')');
    });

module.exports = leaderRouter;