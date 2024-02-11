const express = require('express'); 
const routes = require('./routes');

const handlebarsConfig = require('./config/handlebarsConfig');
const expressConfig = require('./config/configExpress');

const app = express();
const port = 5000;  

handlebarsConfig(app);
expressConfig(app);



 app.use(routes);


app.listen(port,()=>console.log(`server is listening on port http://localhost:${port}`));