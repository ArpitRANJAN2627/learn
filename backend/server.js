const express=require('express');
const app= express();
const cors = require('cors');

const mongoose=require('mongoose');
const foodApi=require('./apis/foodApi')




mongoose.connect('mongodb://localhost:27017/food-app')
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err));
  



app.use(cors());
app.use(express.json());





    app.use(foodApi);








      app.listen(9000,()=>{
        console.log('server started at port 9000');
      });