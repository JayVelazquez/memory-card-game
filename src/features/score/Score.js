import React from 'react';
import { useSelector } from 'react-redux';
import { selectMatchedIDs } from '../board/boardSlice.js' 



export const Score = () => {
  const cardsMatched = useSelector(selectMatchedIDs)
 
  let status = (cardsMatched.length === 12 ) ?
     'You Win' : `Matched: ${cardsMatched.length}`

  return (
    <div className="score-container"> {status} </div>
  );
};