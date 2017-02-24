import * as express from 'express';
import * as util from 'util';

var router = express.Router();

router.get('/', (req, res, next) => {

    res.render('index', 
        { title: 'ExpressAurelia'
        }
    );
});

router.get('/menuitems', (req, res, next) => {
    res.json({ menuItems : [
        { ButtonName : 'About'},
        { ButtonName : 'Contact'},
        { ButtonName : 'Login'}
    ] });
});



router.post('/login', (req, res, next) => {
    console.log(`login received : 
        ${util.inspect(req.body, false, null)}`);
    res.sendStatus(200);
});

export { router } ;
