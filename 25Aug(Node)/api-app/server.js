const express = require('express')
const app = express();
const PORT_NUMBER = 3000;
const testRouter= require('./routes/test');
const helmet = require('helmet')

app.use(helmet);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/test', testRouter);

app.listen(PORT_NUMBER, (err)=>{
    console.log("Attempting to start server...");
    if(err){
        console.log("Failed to start server");
        return process.exit(1);
    }

    console.log(`Starting server on http://localhost:${PORT_NUMBER}`);
})
