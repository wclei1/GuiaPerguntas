const express = require("express");
const app = express();

// Estou dizendo pro meu express usar o EJS como viw engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index");
    let titulo = document.getElementById('')
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.listen(8080, () => {console.log("App rodando!");});
