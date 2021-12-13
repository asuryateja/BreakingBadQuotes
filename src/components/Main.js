import React from 'react'
import { useState, useEffect } from 'react';
import './Main.css'

const Main = () => {
  const [quote, setQuote] = useState('');
  const baseUrl = 'https://www.breakingbadapi.com/api/quote/random';
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setQuote(data[0].quote);
      console.log(data);
    }
    fetchData();
  },[])

  let getData = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setQuote(data[0].quote);
      console.log(data);
  }
    return (
        <>
        <div className='main'>
            <div className='quote'>{quote}</div>    
        </div>
        <button className='btn' onClick={getData}>New 🔥</button>
        </>
    )
}

export default Main
