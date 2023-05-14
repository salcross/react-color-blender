import React from 'react'
import GridSquare from './GridSquare'
import useWindowSize from './hooks/useWindowSize';

const ColorArea = ({ 
    colorBg, 
    colors, 
    height, 
    width, 
    borderRadius, 
    hexToggle, 
    gapToggle 
  }) => {

  const { viewportHeight, viewportWidth } = useWindowSize()

  const getCellSize = () => {
    if (viewportWidth < 768) {
      if (height >= width) {
        return Math.min(viewportWidth * 0.52 / height, 150)
      } else {
        return Math.min(viewportWidth * 0.8 / width, 50)
      }
    } else {
      return Math.min(viewportHeight, viewportWidth * 0.69) * 0.86 / Math.max(height, width)
    }
  }

  
  return (
    <div className='blend-area' style={{ backgroundColor: colorBg }}>
      <ul style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${width}, ${getCellSize()}px)`,
        alignItems: 'stretch',
        gap: gapToggle ? 'min(1.5vw, 7px)' : '0'
        }}>
      {colors.map((color) => (
            <GridSquare
                key={color.id}
                color={color}
                borderRadius={borderRadius}
                hexToggle={hexToggle}
                getCellSize={getCellSize}
            />
        ))}
      </ul>
    </div>
  )
}

export default ColorArea