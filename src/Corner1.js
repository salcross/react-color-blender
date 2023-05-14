import React from 'react'
import colorNames from 'colornames'

const Corner1 = ({ 
    input1, 
    setInput1, 
    color1, 
    setColor1, 
    randomColor1, 
    regex,
    borderRadius
  }) => {

  return (
    <div className='input-container'>
      <section
        className='corner-preview'
        style={{ 
          backgroundColor: color1,
          borderRadius: borderRadius
        }}>
      </section>
      <label className="offscreen" htmlFor="addColor1">Enter CSS color or hex value</label>
      <input
        type="text"
        id="addColor1"
        placeholder="Add Color"
        value={input1}
        maxLength={20}
        onChange={(e) => {
          setInput1(e.target.value);
          if (regex.test(e.target.value)) {
            e.target.value.length === 4
            ? setColor1(e.target.value + e.target.value.substring(1, 4))
            : setColor1(e.target.value) 
          }
          if (colorNames(e.target.value)) {
            setColor1(colorNames(e.target.value))
          }
        }}
      />
      <button onClick={randomColor1}>Random</button>
    </div>
  )
}

export default Corner1