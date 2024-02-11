function configExpress (app){
    const express = require('express'); 
    
    const path = require('path');
    app.use(express.static(path.resolve('src/static')));
    return app;
}

module.exports = configExpress; 

