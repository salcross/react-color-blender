import React from 'react'
import colorNames from 'colornames'

const Corner4 = ({ 
  input4, 
  setInput4, 
  color4, 
  setColor4, 
  randomColor4, 
  regex,
  borderRadius
}) => {

return (
  <div className='input-container'>
    <section
      className='corner-preview'
      style={{ 
        backgroundColor: color4,
        borderRadius: borderRadius  
      }}>
      </section>
      <label className="offscreen" htmlFor="addColor4">Enter CSS color or hex value</label>
      <input
        type="text"
        id="addColor4"
        placeholder="Add Color"
        value={input4}
        maxLength={20}
        onChange={(e) => {
          setInput4(e.target.value);
          if (regex.test(e.target.value)) {
            e.target.value.length === 4
            ? setColor4(e.target.value + e.target.value.substring(1, 4))
            : setColor4(e.target.value) 
          }
          if (colorNames(e.target.value)) {
            setColor4(colorNames(e.target.value))
          }
        }}
      />
      <button onClick={randomColor4}>Random</button>
    </div>
  )
}

export default Corner4