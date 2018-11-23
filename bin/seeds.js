const mongoose = require('mongoose')
const Book = require('../models/Book')

const dbName = 'bookstore'

mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })

const books = [
  {
    "title": "Harry el Sucio Potter",
    "author": "J.K Rowling",
    "pages": 700,
    "genre": "Fantasy",
    "year": 2010,
  },
  {
    "title": "Harry el Sucio Potter 2",
    "author": "J.K Rowling",
    "pages": 710,
    "genre": "Fantasy",
    "year": 2009,
  },
  {
    "title": "Harry el Sucio Potter 3",
    "author": "J.K Rowling",
    "pages": 600,
    "genre": "Fantasy",
    "year": 2008,
  },
  {
    "title": "Harry el Sucio Potter 4",
    "author": "J.K Rowling",
    "pages": 500,
    "genre": "Fantasy",
    "year": 2007,
  },
  {
    "title": "Harry el Sucio Potter 5",
    "author": "J.K Rowling",
    "pages": 400,
    "genre": "Fantasy",
    "year": 2003,
  },
]

Book.create(books)
  .then(books => {
    console.log(`${books.length} books were created. `)
    mongoose.connection.close()
  }).catch(err => {
    console.log('Something went wrong.. ' + err)
  })