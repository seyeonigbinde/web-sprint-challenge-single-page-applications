import React from 'react'

import { useHistory } from "react-router-dom";

export default function Home() {

  const history = useHistory()

  const routeToOrder = () => {
    history.push('/Order')
  }

  return (
<>
    <div className='home-image'>
        <h1>Your favourite food, deliver while coding</h1>
        <button onClick={routeToOrder}>Pizza?</button>
    </div>
      <h2>Food Delivery in Lagos</h2>
     <div className='pizza_items'>
      <img
        className=''
        src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1014&q=80'
        alt=''
      />
    
      <img
        className=''
        src='https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=531&q=80'
        alt=''
      />
    
      <img
        className=''
        src='https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80'
        alt=''
      />
     
      <img
        className=''
        src='https://images.unsplash.com/photo-1576458088443-04a19bb13da6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
        alt=''
      />
   
      <img
        className=''
        src='https://images.unsplash.com/photo-1545016803-a7e357a737e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2734&q=80'
        alt=''
      />
      
      <img
        className=''
        src='https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
        alt=''
      />
     
      <img
        className=''
        src='https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
        alt=''
      />
    
      <img
        className=''
        src='https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'
        alt=''
      />
     
    </div>
    </>
  )
}
