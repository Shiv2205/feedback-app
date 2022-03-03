import React from 'react'
import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
      <div>
          <img src={spinner} alt="Loading..." style={{width: '200px', margin: 'auto', display: 'block'}} />
          <p style={{textAlign: 'center'}}>Loading...</p>
      </div>
  )
}

export default Spinner