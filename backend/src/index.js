const express = require('express');
const corts = require('cors')
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);



/**
 * Métodos HTTP:
 *
 * GET: buscar uma informação do backend
 * POST: criar uma informação no backend
 * PUT: alterar uma informação no backend
 * DELETE: deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros enviados na rota após "?" (Filtros, paginação) (?nome=x)
 * Route Params: Usados para identificar recursos (/users/1) (:id)
 * Request Body: Corpo da requisição, cria ou altera recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Formas de usar as DBs
 *
 * Driver: SELECT * FROM users
 * Query Builder: table('users')
 */



