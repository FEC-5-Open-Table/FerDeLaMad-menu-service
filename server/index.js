// 3rd party imports
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// 1st party imports 
const model = require('./model.js');

app.use(express.static(path.join(__dirname, '../public')));

app.use('/restaurant/:id/', express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET');
  next();
});

// Read
app.get('/api/restaurant/:id', (req, res) => {
  if (!isNaN(Number(req.params.id))) {
    model.getData(req.params.id, (err, results) => {
      if (err) {
        console.log(err);
      }
      res.send(JSON.stringify(results));
    });
  }
});

// Create
app.post('/create/restaurant', (req, res) => {
  model.insertData(req.body);
  res.send('completed insert');
});

// Update
app.put('/update/restaurant', (req, res) => {
  console.log('body: ', req.body);
  model.updateData(req.body);
  res.send('completed update')
});

// Delete
app.delete('/delete/restaurant/:id', (req, res) => {
  model.deleteData(req.params.id)
  res.send('deleted item');
});

const port = 3003;
app.listen(port, () => console.log(`Server listening on ${port}`));
