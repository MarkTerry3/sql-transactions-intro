const express = require('express');
const bodyParser = require('body-parser');
const accountRouter = require('./routes/account.router.js');
const router = require('./routes/account.router.js');
const pool = require('./modules/pool.js');
const { Connection } = require('pg/lib');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/account', accountRouter);

// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});


