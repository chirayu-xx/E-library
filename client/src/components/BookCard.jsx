import React from 'react'
import { Link } from 'react-router-dom'

function BookCard({book}) {

  return (
    <Link to={`show-book/${book._id}`} className='border-2 border-[#FFC107] flex flex-col justify-center p-2 text-white rounded-md'>
      <img src={book.imgUrl} className='h-48 w-32' alt='thumbnail' />
      <div className='text-left'>
        <h2 className='font-bold'>{book.title}</h2>
        <h3 className=''>{book.author}</h3>
        <h3 className=''>{book.description}</h3>
      </div>
    </Link>
  )
}

export default BookCard
