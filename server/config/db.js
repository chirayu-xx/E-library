const mongoose = require('mongoose')
const config = require('config')


const dbUrl = config.get('mongoURL')


const connectDB = async() => {
    try{
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
        });
        console.log('Connected to database')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB