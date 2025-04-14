import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav';
import Quote from './Components/QuoteCard';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Quote/>
      <Footer/>
    </>
  )
}

export default App;
