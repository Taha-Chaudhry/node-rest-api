const express = require('express');
const fs = require("fs");
const app = express();
const errorHandling = require('./errorHandling.js')

app.use(express.json())


app.get('/users', function(_req, res) {
  fs.readFile(__dirname + "/" + "database.json", 'utf8', function(_err, data) {
    data = JSON.parse(data);
    res.end(JSON.stringify(data.users));
  });
})


app.get('/users/:id', function(_req, res) {
  fs.readFile(__dirname + "/" + "database.json", 'utf8', function(_err, data) {
    data = JSON.parse(data);
    let user = data.users[parseInt(req.params.id) - 1]
    res.end(JSON.stringify(user));
  });
})


app.post('/addUser', function(req, res) {
  fs.readFile(__dirname + "/" + "database.json", 'utf8', function(_err, data) {
    data = JSON.parse(data);
    let body = req.body;

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) return errorHandling.raiseError(1, res);

    if (!body.name || !body.password || !body.proffession) return errorHandling.raiseError(2, res);

    let id = parseInt(data.users.length) + 1
    const user = {
      "id": id,
      "name": body.name,
      "password": body.password,
      "proffession": body.proffession
    };

    data.users.push(user);
    fs.writeFileSync(__dirname + "/" + "database.json", JSON.stringify(data, null, "\t"));
    res.end(JSON.stringify(data.users[id - 1]));
  });
})


app.get('/', (_req, res) => {
  res.send('Rest API Running!');
});


let server = app.listen(8080, function() {
  console.log(`App listening at port ${server.address().port}`)
})