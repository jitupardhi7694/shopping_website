const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.port || 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.send('welcome to my dashboard..');
});

app.get('/home', (req, res) => {
    res.render('index');
    console.log('home page is running on server 3000');
});

app.listen(port, (err) => {
    if (err) throw err;
    else {
        console.log(`server running on http://localhost:3000`);
    }
});
