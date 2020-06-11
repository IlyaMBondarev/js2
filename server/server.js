// Modules importing
const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');
const app = express();
const addGood = require('./addGood');

// Middleware
app.use(express.json());
app.use('/', express.static('./public'));
app.use('/api/cart', cartRouter);

// Base routes
app.get('/api/products', (req, res) => {
  fs.readFile('./server/db/products.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

app.get('/api/catalog', (req, res) => {
  fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

app.get('/api/good', (req, res) => {
  fs.readFile('./server/db/good.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

app.get('/api/open/:id', (req, res) => {
  fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      let catalog = JSON.parse(data);
      fs.readFile('./server/db/products.json', 'utf-8', (err, data) => {
        if (err) {
          console.log(err);
          res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
          let products = JSON.parse(data);
          fs.readFile('./server/db/good.json', 'utf-8', (err, data) => {
            if (err) {
              console.log(err);
              res.sendStatus(404, JSON.stringify({result: 0, text: err}));
            } else {
              let good = JSON.parse(data);
              const newGood = addGood(good, catalog, products, req);
              fs.writeFile('./server/db/good.json', newGood, (err) => {
                if (err) {
                  res.send('{"result": 0}');
                } else {
                  res.send('{"result": 1}');
                }
              })
            }
          })
        }
      })
    }
  })
});

// Server start
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});

// app.get(); // READ
// app.post(); // CREATE
// app.put(); // UPDATE
// app.delete(); // DELETE
