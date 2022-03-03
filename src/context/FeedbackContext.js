import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid' //used to generate unique id
//import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        fetchFeedback()
    }, [])

    //Fetch feedback from json server
    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
    }

    //Delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete this feedback?'))
        {
            setFeedback(feedback.filter((item) => item.id !== id ));
        }
    }

    //Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return <FeedbackContext.Provider
                value={{feedback, deleteFeedback, addFeedback}}
            >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext