import React from 'react'
import SidePanel from '../common/SidePanel'
import Calculator from '../Components/CalculatorNew'
export default function ReactCalculator() {
  return (
    <div>
    <div style={{ textAlign:"center" }}>
     <h1>Calculator using React hooks</h1>
     <h3>Created by Pooja Saini : UI Developer</h3>
     </div>
        <SidePanel/>
        <Calculator/>
    </div>
  )
}
