const router = require('express').Router();

// router.get("/",(req,res)=>{
//     return res.status(201).send("Hello from express")

// })

// router.get("/:id?", (req,res)=>{
//     return res.status(201).send(req.params);
// })

// router.get("/:id?", (req,res)=>{
//     return res
//     .status(201)
//     .json({pathparams: req.params, queryparams: req.query });
// })


router.post("/data", (req,res)=>{
    return res
    .json({body: req.body });
})

module.exports = router;