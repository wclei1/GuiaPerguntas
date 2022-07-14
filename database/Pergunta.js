const Sequelize = require("sequelize");
const connection = require("./database");

//MODEL
const Pergunta = connection.define('Perguntas',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {
    console.log('Tabela pergunta criada com sucesso.')
});

module.exports = Pergunta;