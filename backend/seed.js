const mongoose = require('mongoose');
const Food = require('./models/Food');

mongoose.connect('mongodb://localhost:27017/food-app')
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err));

const Dummy_foods = [
    {
        name: 'Burger',
        price: 10,
        desc:'Extra Cheese and Spice'
    },
    {
        name: 'Panner Tikka',
        price: 22.25,
        desc:'Smooth and Delicious Paneer grilled to Perfection'
    },
    {
        name: 'Pizza',
        price: 19.25,
        desc:'Smooth and Delicious Pizza grilled to Perfection'
    },
    {
        name: 'Pasta',
        price: 15.99,
        desc:'Smooth and Delicious Pasta grilled to Perfection'
    },
     {
        name: 'Noodles',
        price: 15.99,
        desc:'Smooth and Delicious Pasta grilled to Perfection'
    },
];



const seedDB = async() => {
    
    await Food.deleteMany({});

    await Food.insertMany(Dummy_foods);
    console.log('DB Seeded');

}


seedDB();