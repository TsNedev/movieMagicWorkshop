const express = require('express');

const router = express.Router();
// const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/',(req,res)=>{

    const movies = movieService.getAll();
    res.render(`home`,{movies});
    });

    router.get('/about',(req,res)=>{
        res.render(`about`);
    })

module.exports = router;

