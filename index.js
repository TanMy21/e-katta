const express = require('express');

const app = express();

const port = 5000;







app.listen(port, function(err){
    if(err){
        console.log(`Server is running on port: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});