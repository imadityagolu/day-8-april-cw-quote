import React from 'react'
import QuoteCard from './QuoteCard'
import quotesData from './Quote';

const QuoteCardList = () => {
  console.log({quotesData});
  return (
    <>
    <div className=''>
       {quotesData.quotes.map((quote, index) => (
        <QuoteCard key={index} text={quote.quote} author={quote.author} />
      ))}
    </div>
    </>
  );
}

export default QuoteCardList;