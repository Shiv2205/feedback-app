import React, { useState, useContext } from 'react'
import Card from './Card';
import Button from './Button'
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm({ reverse }) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const { addFeedback } = useContext(FeedbackContext)

  const handleChange = (e) => {
        if(text === '')
        {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !== '' && text.trim().length < 10)
        {
            setBtnDisabled(true)
            setMessage('UI Help: Review must be at least 10 characters.')
        }
        else
        {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      if(text.trim().length >= 10)
      {
        const newFeedback = {
            text,
            rating
        }

        addFeedback(newFeedback)
        setText('')
      }
  }

  return (
    <Card reverse={reverse}>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your experience with us?</h2>
            <RatingSelect select={(rating) => {setRating(rating)}} reverse={reverse}/>
            <div className="input-group">
                <input type="text" placeholder='Write a review' onChange={handleChange} value={text} style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',color: reverse ? '#fff' : '#000',}}/>
                <Button type='submit' version={!reverse ? 'secondary' : 'primary'} isDisbled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm;