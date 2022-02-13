const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./db.js');


mongoose.connect('mongodb+srv://hariharanvj:passcode@flames.u30qw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',(err) => {
    if (!err) {
        console.log('Succeeded to connect');
    }
    else{
        console.log(err.message);
    }
});

const app = express();

app.use(express.static('public'))
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {

    res.render('index.html');
})

app.post('/', (req, res) => {
    const user = new User({
        nameOne: req.body.nameOne,
        nameTwo: req.body.nameTwo,

    });
    console.log(req);
    user.save((err)=>{
        if (!err){
            console.log('Success');
            res.send('Success');
        }
        else{
            console.log(err.message);

        }
    });

})



const port = process.env.PORT || 3001;

app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`);
});