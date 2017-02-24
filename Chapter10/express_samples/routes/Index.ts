import * as express from 'express';
var router = express.Router();

router.get('/', (req, res, next) => {
    //let userName = req.session['username'];

    res.render('index', 
        {   title: 'Express'
            ,username : req.session['username']
        }
    );
});

export { router } ;