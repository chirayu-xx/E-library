const mongoose = require('mongoose')

//eg date 
// 2023-07-18T05:32:38.265+00:00

const BookSchema = new mongoose.Schema({
    title:{
        type : String,
        required: true,
    },
    isbn:{
        type: Number,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publised_Date:{
        type: Date,
        required: true,
    },
    publisher: {
        type : String,
        required: true,
    },
    updated_date : {
        type: Date,
        default: Date.now,
    },
    imgUrl:{
        type: String,
        required: true,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfciuKpYoKW-DCzo8mSqAekQIQHCQgAj4w9g&usqp=CAU'
    },
    whereToBuy:{
        type: String,
    }
})  

module.exports = Book= mongoose.model('book', BookSchema)

