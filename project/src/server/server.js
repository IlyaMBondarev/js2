// Modules importing
const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');
const app = express();
const addGood = require('./addGood');
const path = require('path');

// Middleware
app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/api/cart', cartRouter);

const catalogJSONPath = path.resolve(__dirname, './db/catalog.json');
const productsJSONPath = path.resolve(__dirname, './db/products.json');
const goodJSONPath = path.resolve(__dirname, './db/good.json');

// Base routes
app.get('/api/products', (req, res) => {
  fs.readFile(productsJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

app.get('/api/catalog', (req, res) => {
  fs.readFile(catalogJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

app.get('/api/good', (req, res) => {
  fs.readFile(goodJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

app.get('/api/open/:id', (req, res) => {
  fs.readFile(catalogJSONPath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      let catalog = JSON.parse(data);
      fs.readFile(productsJSONPath, 'utf-8', (err, data) => {
        if (err) {
          console.log(err);
          res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
          let products = JSON.parse(data);
          fs.readFile(goodJSONPath, 'utf-8', (err, data) => {
            if (err) {
              console.log(err);
              res.sendStatus(404, JSON.stringify({result: 0, text: err}));
            } else {
              let good = JSON.parse(data);
              const newGood = addGood(good, catalog, products, req);
              fs.writeFile(goodJSONPath, newGood, (err) => {
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
