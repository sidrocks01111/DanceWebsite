const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// Express specific stuff 

app.use('/static', express.static('static'));
app.use(express.urlencoded());

// Pug specific stuff 

app.set('view engine', 'pug');
app.set('/views', path.join('__dirname','views'));

// Endpoint

app.get("/", (req, res) =>{
    res.status(200).render('index.pug');
})




// Start the server 

app.listen(port, () =>{
   console.log(`This server is running at port ${port}`);
});