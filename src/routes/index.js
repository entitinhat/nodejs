const newsRouter = require('./news');
const siteRouter = require('./site');
const meRouter = require('./me')
const coursesRouter = require('./courses');

function route(app) {
    app.use('/tin-tuc', newsRouter);
    app.use('/', siteRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    
}

module.exports = route;
