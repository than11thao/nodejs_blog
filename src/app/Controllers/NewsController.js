

class NewsController {

    // GET /news
    index(req, res){
        return res.render('news');
    }

    // GET /news/:slug
    show(req, res) {
        return res.send("NEWS Detail")
    }
}

module.exports = new NewsController();




