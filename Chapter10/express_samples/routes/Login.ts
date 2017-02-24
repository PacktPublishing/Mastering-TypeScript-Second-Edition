import * as express from 'express';
var router = express.Router();

router.get('/login', (req, res, next) => {
    res.render('login', 
        { 
            title: 'Express Login'
        }
    );
});

router.post('/login', (req, res, next) => {
    // console.log(`Login.post ${req.url}`);
    // console.log(`Login.post ${req.body.name}`);
    if (req.body.username.length > 0) {
        req.session['username'] = req.body.username;
        res.redirect('/');
    } else {
        res.render('login', { 
            title: 'Express',
            ErrorMessage: 'Please enter a user name'
            });
    }
});

export { router } ;