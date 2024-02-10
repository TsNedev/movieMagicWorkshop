const express = require('express');

const router = express.Router();

const homeController = require('./controllers/homeController');

const movieController = require('./controllers/movieController');
const errorMassageController = require('./controllers/errorMassageController'); 

router.use(homeController);
router.use(movieController);



router.use(errorMassageController); 
   module.exports = router;