const {Router} = require("express")
const router = Router()
const messageJ = require("../twillio/send_msg")


router.get("/",(req,res)=>{
    res.render("index")
})
router.post("/send-sms",async(req,res)=>{
    const mess = await messageJ(req.body.body,req.body.phone)     
    console.log(mess.sid)   
    res.send("resivid")
})

module.exports = router