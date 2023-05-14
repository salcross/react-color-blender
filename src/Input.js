import React from 'react'

const Input = ({ colorValue, setColorValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">Enter CSS color or hex value</label>
        <input 
            type="text" 
            placeholder="Enter CSS color or hex value"
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
        /> 
    </form>
  )
}

export default Input