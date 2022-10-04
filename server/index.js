const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://junha:junha76@cluster0.lwr3zb2.mongodb.net/?retryWrites=true&w=majority',
    {useNewUrlParser: true}).then(() => console.log('DB connected'))
                            .catch(err => console.error(err));

app.get('/', (req,res)=>{
    res.send('Hello World')
});

app.listen(5000);