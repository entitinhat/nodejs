class NewsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('Show details');
    }
}

module.exports = new NewsController();
