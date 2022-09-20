const path = require('path');
const express = require('express'); // Nạp thư viện express vừa cài
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override')
const app = express();
const port = 3000;
const route = require('./routes'); // ngầm hiểu là file index.js
const db = require('./config/db')
const bodyParser = require('body-parser');
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(bodyParser.json());

db.connect()

app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined')); // HTTP logger
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a + b
        }
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
