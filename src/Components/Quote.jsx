import { useState } from 'react'
import QuoteCardList from "./QuoteCardList"

function Quote() {
  const [count, setCount] = useState(0)

  return (
    <>
    <QuoteCardList/>
    </>
  );
}

export default Quote;