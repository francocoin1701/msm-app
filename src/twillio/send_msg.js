const config = require("../config")
const client = require("twilio")(config.accountSid,config.authToken)

async function messageJ( body,phone){
    try {
        const message = await client.messages.create({
            from: "+12057497351",
            to: phone,
            body:body
        })
        return message
        
    } catch (error) {
        console.log(error)
    }
}
module.exports = messageJ