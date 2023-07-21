const express = require('express')

const router = express.Router()

const Book = require('../models/Book')

router.get('/test', (req,res) => {
    res.send('Book route is working')
})

router.post('/', (req,res) => {
    Book.create(req.body).then(book => res.json({msg: 'Book added successfully', book}))
    .catch(err => res.status(400).json({error: "Unable to add this book"}))
})

router.get('/', (req,res) => {
    Book.find().then(books =>res.json(books))
    .catch(err => res.status(400).json({error: "Error while fetching books"}))
})


router.get('/:id', (req,res) => {
    Book.findById(req.params.id).then((book) => res.json(book)).
    catch(err => res.status(400).json({err}))
})


router.put('/:id', (req,res) => {
    Book.findByIdAndUpdate(req.params.id, req.body).then((book) => res.json({ msg: 'Updated successfully' }))
    .catch((err) =>
      res.status(400).json({err})
    );
})

router.delete('/:id', (req,res) => {
    Book.findByIdAndDelete(req.params.id)
    .then((book) => res.json({ msg: 'Deleted successfully' }))
    .catch(err => res.status(400).json({err}))
})


module.exports = router

