import React from 'react'

const QuoteCard = ({text, author}) => {
  return (
    <>
    <div className='m-24'>
        <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{text}</h5>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{author}</p>
        </div>
    </div>
    </>
  );
}

export default QuoteCard;