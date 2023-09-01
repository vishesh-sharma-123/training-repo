require("dotenv").config();
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const express = require('express')
const app = express();
const PORT_NUMBER = argv.port || 3000;
const testRouter= require('./routes/test');
const productRouter= require('./routes/product');
const helmet = require('helmet')
const morgan = require("morgan");
const db= require('./db')
const {rateLimit} = require('express-rate-limit')
const authMiddleware = require("./middleware/auth")
const userRouter = require('./routes/user');
const { middleware } = require("yargs");


console.log(process.argv, argv)
// console.log(process.env.DB_USER, process.env.DB_PASSWORD)
const limiter = rateLimit({
    windowMs: 5*60*1000,
    max:5,
    standardHeaders: "draft-7",
    legacyHeaders: false

})

app.use(helmet());
app.use(authMiddleware)
app.use(morgan("dev"));
app.use(limiter)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/test', testRouter);
app.use('/product', productRouter);
app.use("/auth", userRouter);
app.listen(PORT_NUMBER, (err)=>{
    console.log("Attempting to start server...");
    if(err){
        console.log("Failed to start server");
        return process.exit(1);
    }

    console.log(`Starting server on http://localhost:${PORT_NUMBER}`);
    db().catch((e)=> console.log("Failed to connect to db", e))
})
