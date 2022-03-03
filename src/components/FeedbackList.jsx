import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList({reverse}) {

    const { feedback } = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0)
    {
        <p>No feedback yet</p>
    }

  return (
    <div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} reverse={reverse} />
        ))}
    </div>
  )
}

export default FeedbackList;