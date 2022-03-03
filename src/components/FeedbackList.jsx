import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './Spinner';

function FeedbackList({reverse}) {

    const { feedback, isLoading } = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0))
    {
        <p>No feedback yet</p>
    }

    return isLoading ? <Spinner/> : 
    (<div className="feedback-list">
      {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} reverse={reverse} />
      ))}
    </div>)
  
}

export default FeedbackList;