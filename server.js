const http = require('http');
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const req = require('express/lib/request');
const app = express();


const PORT = process.env.PORT || 3001;

const Server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(apiRoutes);

app.use(htmlRoutes);


app.listen(PORT, () => console.log('Server is listening on port ${PORT}'));