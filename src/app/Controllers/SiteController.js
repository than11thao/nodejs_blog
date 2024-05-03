class SiteController {
    // GET /news
    index(req, res) {
        return res.render('home');
    }

    // GET /news/:slug
    search(req, res) {
        return res.render('search');
    }
}

module.exports = new SiteController();
