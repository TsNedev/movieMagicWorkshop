const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/create',(req,res)=>{

  res.render('create');     
});

router.post('/create',(req,res)=>{
    const nweMovie = req.body;
    movieService.create(nweMovie);  

    res.redirect('/');
});

router.get('/details/:movieId',(req,res)=>{
    const movieId = req.params.movieId;
    const movie = movieService.getOne(movieId);
    res.render('details',{movie})
})


module.exports= router; 