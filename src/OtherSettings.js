import React from 'react'
import Height from "./Height";
import Width from "./Width";

const OtherSettings = ({ 
    setHeight, 
    setWidth,
    setBorderRadius,
    gapToggle,
    setGapToggle,
    hexToggle,
    setHexToggle
  }) => {

  return (
    <section className="other-settings">
        <Height setHeight={setHeight}/>
        <Width setWidth={setWidth}/>
        <section className="center">
        <label htmlFor="borderRadius">Color Shape: </label>
        </section>
        <select 
        id="borderRadius" 
        defaultValue="10%" 
        onChange={(e) => setBorderRadius(e.target.value)}
        >
        <option value="0">Square</option>
        <option value="10%">Round 1</option>
        <option value="25%">Round 2</option>
        <option value="50%">Circle</option>
        </select>
        <section className="checkbox-container">
        <label htmlFor="gapToggle">Gap</label>
        <input 
            type="checkbox" 
            id="gapToggle"
            onChange={() => setGapToggle(!gapToggle)}
            checked={gapToggle}
        />
        </section>
        <section className="checkbox-container">
        <label htmlFor="hexToggle">Show Hex</label>
        <input 
            type="checkbox" 
            id="hexToggle"
            onChange={() => setHexToggle(!hexToggle)}
            checked={hexToggle}
        />
        </section>
    </section>
  )
}

export default OtherSettings