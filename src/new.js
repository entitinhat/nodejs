const path = require('path');
const express = require('express'); // Nạp thư viện express vừa cài
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes'); // ngầm hiểu là file index.js

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined')); // HTTP logger
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);
            app.get('/home', function (req, res) {
        res.render('home');
});

app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
});
