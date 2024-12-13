import React from 'react'
import { Link } from 'react-router-dom'
export default function sidePanel() {
  return (
    <div>
      <nav>
        <ul>
            <li>1. <Link to='/react-calculator'>React Calculator</Link></li> 
            <li>2. <Link to='/react-star-rating'>React Star Rating</Link></li>
            <li>3. <Link target='_blank' to='https://poojasaini12.github.io/swiggy-app/'>Tailwind App (swiggy)</Link></li>                                                                   
        </ul>
      </nav>
    </div>
  )
}
