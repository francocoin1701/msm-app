const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/franco",{
    useUnifiedTopology: true,
    useNewUrlParser: true

})
.then(db=> console.log("db is connect"))
.catch(err=> console.log(err))