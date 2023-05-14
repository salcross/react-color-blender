import React from 'react'
import colorNames from 'colornames'

const Corner2 = ({ 
    input2, 
    setInput2, 
    color2, 
    setColor2, 
    randomColor2, 
    regex,
    borderRadius
  }) => {

  return (
    <div className='input-container'>
      <section
        className='corner-preview'
        style={{ 
          backgroundColor: color2,
          borderRadius: borderRadius  
        }}>
      </section>
      <label className="offscreen" htmlFor="addColor2">Enter CSS color or hex value</label>
      <input
        type="text"
        id="addColor2"
        placeholder="Add Color"
        value={input2}
        maxLength={20}
        onChange={(e) => {
          setInput2(e.target.value);
          if (regex.test(e.target.value)) {
            e.target.value.length === 4
            ? setColor2(e.target.value + e.target.value.substring(1, 4))
            : setColor2(e.target.value) 
          }
          if (colorNames(e.target.value)) {
            setColor2(colorNames(e.target.value))
          }
        }}
      />
      <button onClick={randomColor2}>Random</button>
    </div>
  )
}

export default Corner2