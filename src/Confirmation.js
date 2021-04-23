import React from 'react';

function Confirmation({ details }) {
  if (!details) {
    return <h3>Working fetching the customer&apos;s order details...</h3>
  }

  
  return (
    <div className='container'>
        <h2>Congrats! Pizza is on it's way</h2>

        <h3>Order Summary:</h3>
            <p>Name: {details.name}</p>
            <p>Size: {details.size}</p>
            <p>Choice: {details.choice}</p>
            <p>Special Instruction: {details.special}</p>
        <button>Close</button>
    </div>
  )
}

export default Confirmation
