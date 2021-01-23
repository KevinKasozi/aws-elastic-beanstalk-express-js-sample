const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!, This is the year for upskilling. Impoving yourself however you can. This is the year for change. Now you have a real taste of what it takes to become a devops. Kepp revising and practising !!!!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
