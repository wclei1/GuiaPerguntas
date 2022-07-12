const express = require("express");
const app = express();
const bodyParser = require("body-parser"); 
const { urlencoded } = require("body-parser");
const connection = require('./database/database');
const Pergunta = require("./database/Pergunta")

// DATABASE

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })



// HABILITA USAR EJS NO EXPRESS COMO VIEW ENGINE
app.set('view engine', 'ejs');
app.use(express.static('public'));
// BODY PARSER
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// ROTAS
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res)=>{
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});


app.listen(8080, () => {console.log("App rodando!");});
