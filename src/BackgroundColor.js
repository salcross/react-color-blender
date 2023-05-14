import React from 'react'
import colorNames from 'colornames'

const BackgroundColor = ({ 
    inputBg, setInputBg, setColorBg, randomColorBg, regex, bgLock, setBgLock
        }) => {
  return (
    <section className="bgcolor-container">
      <section className="input-container">
        <label className="offscreen" htmlFor="addBgColor">
          Enter CSS color or hex value
        </label>
        <input
          type="text"
          id="addBgColor"
          placeholder="Add Color"
          value={inputBg}
          maxLength={20}
          onChange={(e) => {
            setInputBg(e.target.value);
            if (regex.test(e.target.value)) {
              e.target.value.length === 4
              ? setColorBg(e.target.value + e.target.value.substring(1, 4))
              : setColorBg(e.target.value) 
            }
            if (colorNames(e.target.value)) {
              setColorBg(colorNames(e.target.value))
            }
          }}
        />
        <button onClick={randomColorBg}>Random</button>
      </section>
      <section className="checkbox-container">
        <section className="align-start">
          <label htmlFor="bgLock">Prevent Random Background</label>
        </section>
        <input 
            type="checkbox" 
            id="bgLock"
            onChange={() => setBgLock(!bgLock)}
            checked={bgLock}
        />
      </section>
    </section>
  )
}

export default BackgroundColor