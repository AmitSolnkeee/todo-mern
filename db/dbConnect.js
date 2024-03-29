const mongoose = require('mongoose');


const dbConnect =async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`db is connected successfully`)
    } catch (error) {
        console.log(`Error while connecting to db`)
    }
}
module.exports = dbConnect;