const newRouter = require('./news');
const siteRouter = require('./site');
const coursesRoute = require('./courses');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newRouter);
    app.use('/courses/', coursesRoute);
    app.use('/me/', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;
