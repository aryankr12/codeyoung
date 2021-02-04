const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const translateText = require('./detect')

app.use(express.json())
app.use(require('./detect'))



app.listen(port,()=>{
    console.log('Server started',port);
});


module.exports = app;