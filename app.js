const express = require('express');
const cors = require('cors')
const db = require('./config/db');
const Guitar = require('./models/guitar');
const Review = require('./models/review');


const app = express();
app.use(cors())
app.use(express.json())
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

app.put('/guitars/:id', (request, response) => {
    Guitar.upsert({
        guitar_id: request.params.id,
        name: request.body.name,
        description: request.body.description,
        longDescription: request.body.longDescription,
        image: request.body.image,
        price: request.body.price,
        specifications: request.body.specifications,
        category: request.body.category,
        soldOut: request.body.soldOut
    }, { returning: true })
        .then(guitar => response.json(guitar))
        .catch(e => console.log(e))
})

app.get('/guitars', (_, response) => {
    Guitar.findAll()
        .then(guitars => response.json(guitars))
        .catch(e => console.log(e));
});

app.post('/guitars', (request, response) => {
    Guitar.create({
        guitar_id: request.params.id,
        name: request.body.name,
        description: request.body.description,
        longDescription: request.body.longDescription,
        image: request.body.image,
        price: request.body.price,
        specifications: request.body.specifications,
        category: request.body.category,
        soldOut: request.body.soldOut
    }, { returning: true })
        .then(guitar => response.json(guitar))
        .catch(e => console.log(e))
})

app.get('/reviews-of-guitar/:guitarId', (request, response) => {
    Review.findAll({ where: { guitar_id: request.params.guitarId } })
        .then(review => response.json(review))
        .catch(e => console.log(e))
})

app.post('/reviews', (request, response) => {
    Review.create({
        star: request.body.star,
        body: request.body.body,
        name: request.body.name,
        guitar_id: request.body.guitarId
    }, { returning: true })
        .then(review => response.json(review))
        .catch(e => console.log(e))
})
