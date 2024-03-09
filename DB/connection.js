const mongoose = require('mongoose')
const connectionString = process.env.DB

mongoose.connect(connectionString).then(() => {
    console.log("MongoDB successfully connected with todo server");
}).catch((error) => {
    console.log(`Connection failed erro : ${error}`);
})