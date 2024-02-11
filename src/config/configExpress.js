function configExpress (app){
    const express = require('express'); 
    
    const path = require('path');
    app.use(express.static(path.resolve('src/static')));

    app.use(express.urlencoded({extended:false}));
    return app;
}

module.exports = configExpress; 

