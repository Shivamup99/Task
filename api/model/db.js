const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const url = process.env.URL

const mongoDbConnection = async()=>{
    try {
        await mongoose.connect(url,{useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true})
        console.log('Connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = mongoDbConnection;