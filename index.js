const express = require('express');

const app = express();

const port = 5000;

// use express router
app.use('/', require('./routes'));


//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, function(err){
    if(err){
        console.log(`Server is running on port: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});