const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const news = [
    {
        id: 1,
        title: "title firt New",
        text: "some text of the news some text of the news some text of the news",
        dataNews: new Date
    },
    {
        id: 2,
        title: "title second New",
        text: "some text of the news some text of the news some text of the news",
        dataNews: new Date
    },
    {
        id: 3,
        title: "title third New",
        text: "some text of the news some text of the news some text of the news",
        dataNews: new Date
    },
]

app.get('/containernews', (req, res) => {
    res.send('Hello World! get');
});

app.get('/containernews/news', (req, res) => {
    res.send(news);
});

app.get('/containernews/news/:id', (req, res) => {
    var oneNew = news.find((oneNew) => {
        return oneNew.id === Number(req.params.id) 
    });
    res.send(oneNew);
});

app.post('/containernews/news', (req, res) => {
    const oneNew = {
        id: Date.now,
        title: req.body.title,
        text:  req.body.text,
        dataNews: new Date
    };
    news.push(oneNew);
    res.send(oneNew);
});

app.put('/containernews/:id', (req, res) => {
    var oneNew = news.find((oneNew) => {
        return oneNew.id === Nuber(req.params.id)
    });
    oneNew.title = req.body.title;
    oneNew.text = req.body.text;
    res.sendStatus(200);
});

app.delete('/containernews/news/:id', (req, res) => {
    news = news.find((oneNew) => {
        return oneNew.id !== Number(req.body.id);
    })
    res.sendStatus(200);
});



app.listen(8081, () => {
    console.log('Server is up and running onport 8081')
});