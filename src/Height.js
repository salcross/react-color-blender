import React from 'react'

const Height = ({ setHeight }) => {
  return (
    <section className="select-container">
        <label htmlFor="height">Height:</label>
        <select id="height" onChange={(e) => setHeight(parseInt(e.target.value))}>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
        </select>
    </section>
  )
}

export default Height