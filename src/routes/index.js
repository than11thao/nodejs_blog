const newRouter = require('./news');
const siteRouter = require('./site');
const coursesRoute = require('./courses');

function route(app) {
    app.use('/news', newRouter);
    app.use('/courses/', coursesRoute);
    app.use('/', siteRouter);
}

module.exports = route;
