import React from 'react';
import BookCard from '../components/bookcard';

export default function Library({ books }) {
  return (
    <div>
        <div className='container'>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
      </div>
    </div>
  );
}