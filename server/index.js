const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db')
const books = require('./routes/book')
const app =express();

connectDB()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
    origin:true, credentials: true 
}))

app.use(express.json({extented: false}))


app.use('/api/book', books)


app.get('/', (req,res) => {
    res.send('Api is running')
})

const port = 5000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})