import React from 'react'

const GridSquare = ({ color, borderRadius, hexToggle, getCellSize }) => {

  const visibility = hexToggle === false ? "hidden" : "visible"

  return (
    <li style={{ 
      backgroundColor: color.color, 
      borderRadius: borderRadius, 
    }}
    >
      <p style={{ 
        fontSize: `min(${getCellSize() * 0.2}px, 1.5rem)`,
        visibility: visibility 
      }}>{color.color}
      </p>
    </li>
  )
}

export default GridSquare