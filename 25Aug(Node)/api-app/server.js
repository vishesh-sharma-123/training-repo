require("dotenv").config();
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const express = require('express')
const app = express();
const PORT_NUMBER = argv.port || 3000;
const testRouter= require('./routes/test');
const helmet = require('helmet')
const morgan = require("morgan");


console.log(process.argv, argv)
console.log(process.env.DB_USEER, process.env.DB_PASSWORD)


app.use(helmet());
app.use(morgan("dev"));
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
