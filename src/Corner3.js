import React from 'react'
import colorNames from 'colornames'

const Corner3 = ({ 
  input3, 
  setInput3, 
  color3, 
  setColor3, 
  randomColor3, 
  regex,
  borderRadius
}) => {

return (
  <div className='input-container'>
    <section
      className='corner-preview'
      style={{ 
        backgroundColor: color3,
        borderRadius: borderRadius  
      }}>
      </section>
      <label className="offscreen" htmlFor="addColor3">Enter CSS color or hex value</label>
      <input
        type="text"
        id="addColor3"
        placeholder="Add Color"
        value={input3}
        maxLength={20}
        onChange={(e) => {
          setInput3(e.target.value);
          if (regex.test(e.target.value)) {
            e.target.value.length === 4
            ? setColor3(e.target.value + e.target.value.substring(1, 4))
            : setColor3(e.target.value) 
          }
          if (colorNames(e.target.value)) {
            setColor3(colorNames(e.target.value))
          }
        }}
      />
      <button onClick={randomColor3}>Random</button>
    </div>
  )
}

export default Corner3