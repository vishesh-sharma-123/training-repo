const router = require('express').Router();
const repo = require("../repos/product")
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

router.post("/upload", upload.single("image"),(req,res)=>{
    try{
        return res.status(200).json(req.file)
    }catch(e){
        return res.status(400).json(e);
    }
})


router.post('/', async(req, res)=>{
    try{
        await repo.addProduct(req.body);
        return res.status(201).send();
    }catch(e){
        return res.status(400).json(e)
    }
})

router.get('/:id?', async(req, res)=>{
    try{
        let data;
        if(req.params.id){
            console.log("id here",req.params.id)
            data = await repo.getProductById(req.params.id)
            
        }
       else{
        data = await repo.getAllProduct()
       }
       return res.json(data);
    }catch(e){
        return res.status(400).json(e)
    }
})


router.put("/:id", async(req, res) =>{
    try{
        let data;
        if(req.params.id){
            // console.log("id here",req.params.id)
            data = await repo.updateProduct(req.params.id, req.body)
            
        }
    //    else{
    //     data = await repo.getAllProduct()
    //    }
       return res.json(data);
    }catch(e){
        return res.status(400).json(e)
    }
})
router.delete("/:id", async(req, res) =>{})
module.exports = router;