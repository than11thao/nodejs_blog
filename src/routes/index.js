const newRouter = require('./news')
const siteRouter = require('./news')


function route(app) {
  app.use('/news', newRouter);
  app.use('/', siteRouter);

  // app.get('/', (req, res) => {
  //   return res.render('home');
  // });

  // app.get('/search', (req, res) => {
  //   return res.render('search');
  // });

}

module.exports = route
