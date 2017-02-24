import * as express from 'express';
import * as Index from './routes/index';
import * as path from 'path';
import * as bodyParser from 'body-parser';

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', Index.router);

app.use('/scripts',  express.static(__dirname + '/scripts'));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/css',  express.static(__dirname + '/css'));

app.listen(3000, () => {
    console.log(`express listening on port 3000`);
});

