import * as express from 'express';

// import {ServerMain} from './ServerMain';
// import {ServerMainIndex} from './ServerMainIndex';

let app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log(`listening on port 3000`);
});