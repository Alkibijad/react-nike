import React, { useContext } from 'react'
import Context from '../store/Provider'

function Amount({ value, index }) {
    
    const { dispatch} = useContext(Context)

  return (
      <button onClick={() => { dispatch({ type: "changeAmount", payload: {index, value} }) }} >{ value === 1 ? "+" : "-"}</button>
  )
}

export default Amount