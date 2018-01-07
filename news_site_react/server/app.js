const express = require ('express');
const bodyParser = require ('body-parser');
const mysql = require ('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "diploma"
});

connection.connect((err) => {
    if(err) throw err;
    console.log('MySql connected...');
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// const urlencodedParser = bodyParser.urlencoded({extended: false});

// Get all news
app.get('/containernews/news', (req, res) => {
    let sql = "SELECT * FROM news";
    let query = connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Result: ");
        console.log(result);
        res.send(result);
  });
});
// Get news
app.get('/containernews/news/:id', (req, res) => {
    let sql = `SELECT * FROM news WHERE id = ${req.params.id}`;
    let query = connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Result: ");
        console.log(result);
        res.send(result);
    });
});
// Create news
app.get('/containernews/addnewspost', (req, res) => {
    let post = {
        title: 'Создали новый заголовок 1',
        text:  'Создали новый текст 1 Создали новый текст 1 Создали новый текст 1',
        dataNew: '2018-01-07'
    };
    let sql = 'INSERT INTO news SET ?';
    let query = connection.query(sql, post, (err, result) => {
        if(err) {
            res.sendStatus(500);
            throw err;
        }
        console.log(result);
        res.send('News added....');
        res.send(result);
    })
});
// Update news
app.get('/containernews/updatenews/:id', (req, res) => {
    let post = {
        title: 'Обновили новый заголовок ',
        text:  'Обновили новый текст Обновили новый текст Обновили новый текст',
        dataNew: Date.now
    };
    let sql = `UPDATE news SET title = '${post.title}' WHERE id = ${req.params.id}`;
    let query = connection.query(sql, (err, result) => {
        if(err)throw err;
        console.log(result);
        res.send('News updated....');
        res.send(result);
    })
});
// Delete news
app.get('/containernews/deletenews/:id', (req, res) => {
    let sql = `DELETE FROM news WHERE id = ${req.params.id}`;
    let query = connection.query(sql, (err, result) => {
        if(err)throw err;
        console.log(result);
        res.send('News deleted....');
        res.send(result);
    })
});



app.listen(8081, () => {
    console.log('Server is up and running on port 8081')
});