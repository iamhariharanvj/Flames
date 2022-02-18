const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.static('public'))
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {

    res.render('index.html');
})

const port = process.env.PORT || 3005;

app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`);
});