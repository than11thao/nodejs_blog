const Course = require('../models/Course');
class SiteController {
    // GET /news
    index(req, res) {
        Course.find({})
            .then((courses) => res.json(courses))
            .catch((err) => res.status(400).json({ error: 'ERROR??' }));
    }
    // return res.render('home');
    // GET /news/:slug
    search(req, res) {
        return res.render('search');
    }
}

module.exports = new SiteController();
