const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: 'Seamana OmniStack 11',
    aluno: 'Arthur Costa'
  })
});

module.exports = routes;