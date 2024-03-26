const express = require('express');
const app = express();
const port = 3000;

// ------- Middleware --------
// Middleware for logging
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

// Middleware for parsing JSON
app.use(express.json());

// simple GET
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// ------ Routing ------
// GET request
app.get('/products', (req, res) => {
    res.send('List of products');
});

// POST request
app.post('/products', (req, res) => {
    res.send('Add a new product');
});

// PUT request
app.put('/products/:id', (req, res) => {
    res.send(`Update product with ID: ${req.params.id}`);
});

// DELETE request
app.delete('/products/:id', (req, res) => {
    res.send(`Delete product with ID: ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Server running at <http://localhost>:${port}/`);
});
