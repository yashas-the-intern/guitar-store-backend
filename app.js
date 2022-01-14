const { response, request } = require('express');
const express = require('express');
const db = require('./config/db');
const Guitar = require('./models/guitar');
const Review = require('./models/review');


const app = express();
app.listen(3000, () => console.log('GuitarStore-Backend running on http://localhost:3000/'));
db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})

// RESTFUL APIs

app.get('/guitars/:id', (request, response) => {
    Guitar.findByPk(request.params.id)
        .then(guitar => response.json(guitar))
        .catch(e => console.log(e));
})

app.patch('/guitars/:id', (request, response) => {
    Guitar.upsert({ guitar_id: request.params.id }, {returning: true})
        .then(guitar => response.json(guitar))
})

app.get('/guitars', (_, response) => {
    Guitar.findAll()
        .then(guitars => response.json(guitars))
        .catch(e => console.log(e));
});

app.get('/reviews-of-guitar/:guitarId', (request, response) => {
    Review.findAll({ where: { guitar_id: request.params.guitarId } })
        .then(review => response.json(review))
        .catch(e => console.log(e))
})
