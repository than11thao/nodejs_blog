const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // GET /news
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            // .catch((err) => res.status(400).json({ error: 'ERROR??' }));
            // .catch(err => next(err))
            .catch(next);
    }
    // return res.render('home');
    // GET /news/:slug
    search(req, res) {
        return res.render('search');
    }
}

module.exports = new SiteController();
