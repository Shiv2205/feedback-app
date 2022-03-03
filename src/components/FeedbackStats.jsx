import React, { useState, useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

  const { feedback } = useContext(FeedbackContext)

  const calculateAvg = () => {
    let avg = 0;
    feedback.map((item) => {avg += item.rating});
    avg = avg / feedback.length;
    return avg;
  }

  let average = calculateAvg().toFixed(1);

  return (
      <div className="feedback-stats">
          <h4>{feedback.length} Reviews</h4>
          <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
      </div>
  )
}

export default FeedbackStats;