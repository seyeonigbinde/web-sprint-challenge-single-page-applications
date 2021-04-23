import React from 'react';

function Confirmation({ details }) {
  if (!details) {
    return <h3>Working fetching your customer&apos;s order details...</h3>
  }

  return (
    <div className='container'>
        <div className='home-image'>
        <h1>Congrats! Pizza is on it's way</h1>
      </div>
        <h2>Order Summary</h2>
      <p>Name: {details.name}</p>
      <p>Size: {details.size}</p>
      <p>Choice: {details.choice}</p>
      <p>Special Instruction: {details.special}</p>
    </div>
  )
}

export default Confirmation
