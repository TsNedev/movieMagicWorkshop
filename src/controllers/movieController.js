const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/create',(req,res)=>{

  res.render('create');     
});

router.post('/create',(req,res)=>{
    const nweMovie = req.body;
    movieService.create(nweMovie);  

    res.redirect('/');
})

module.exports= router; 