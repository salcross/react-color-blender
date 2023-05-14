import Corner1 from "./Corner1";
import Corner2 from "./Corner2";
import Corner3 from "./Corner3";
import Corner4 from "./Corner4";
import BackgroundColor from "./BackgroundColor";
import OtherSettings from "./OtherSettings";
import ColorArea from "./ColorArea";
import { randomColor, rgbToHex } from "./randomColor";
import { useEffect, useState } from "react";

function App() {

  const initColor1 = randomColor()
  const initColor2 = randomColor()
  const initColor3 = randomColor()
  const initColor4 = randomColor()

  // States 

  const [input1, setInput1] = useState(initColor1)
  const [input2, setInput2] = useState(initColor2)
  const [input3, setInput3] = useState(initColor3)
  const [input4, setInput4] = useState(initColor4)
  const [inputBg, setInputBg] = useState('#171717')

  const [color1, setColor1] = useState(initColor1)
  const [color2, setColor2] = useState(initColor2)
  const [color3, setColor3] = useState(initColor3)
  const [color4, setColor4] = useState(initColor4)
  const [colorBg, setColorBg] = useState('#171717')

  const [height, setHeight] = useState(3)
  const [width, setWidth] = useState(3)

  const [colors, setColors] = useState([])
  const [bgLock, setBgLock] = useState(true)
  const [borderRadius, setBorderRadius] = useState("10%")
  const [hexToggle, setHexToggle] = useState(false)
  const [gapToggle, setGapToggle] = useState(true)


  // Regex for validating user input

  const regex = /^#(?:[a-fA-F\d]{3}){1,2}$/g
  
  
  // Recalculates the color grid upon setting change
  
  useEffect(() => {

    // Color conversion functions

    const hexToRgb = (hex) => {
      const value = hex[0] === '#' ? hex.substring(1, 7) : hex
      return ([
        parseInt(value.substring(0,2), 16),
        parseInt(value.substring(2,4), 16),
        parseInt(value.substring(4,6), 16)
      ])
    }


    // Color blending functions

    const interpolate = (value1, value2, amount) => {
        const output = [value1]
        const interval = Math.abs(value1 - value2) / (amount - 1)
        if (value2 > value1) {
          for (let i = 0; i < (amount - 2); i++) {
            let v = Math.round(value1 + (interval * (i + 1)))
            output.push(v)
          }
        } else {
          for (let i = 0; i < (amount - 2); i++) {
            let v = Math.round(value1 - (interval * (i + 1)))
            output.push(v)
          }
        }
        output.push(value2)
        return output
      }

    const blend = (v1, v2, v3, v4) => {
      const leftColumn = interpolate(v1, v3, height)
      const rightColumn = interpolate(v2, v4, height)
      const values = []
      for (let i = 0; i < height; i++) {
        let rowBlend = interpolate(leftColumn[i], rightColumn[i], width)
        for (let i = 0; i < rowBlend.length; i++) {
          values.push(rowBlend[i])
        }
      }
      return values
    }
    
    const generateColors = () => {
    const rgbColors = [
      hexToRgb(color1), 
      hexToRgb(color2), 
      hexToRgb(color3), 
      hexToRgb(color4)
    ]
    const red = blend(rgbColors[0][0], rgbColors[1][0], rgbColors[2][0], rgbColors[3][0])
    const green = blend(rgbColors[0][1], rgbColors[1][1], rgbColors[2][1], rgbColors[3][1])
    const blue = blend(rgbColors[0][2], rgbColors[1][2], rgbColors[2][2], rgbColors[3][2])
    const colorList = []
    for (let i = 0; i < (height * width); i++) {
      let rgb = [red[i], green[i], blue[i]]
      let newColor = {id: i, color: rgbToHex(rgb)}
      colorList.push(newColor)
    }
    setColors(colorList)
  }

    generateColors();

  }, [color1, color2, color3, color4, height, width])


  // Randomize colors

  const randomColor1 = () => {
    const color = randomColor();
    setInput1(color);
    setColor1(color);
  }

  const randomColor2 = () => {
    const color = randomColor();
    setInput2(color);
    setColor2(color);
  }

  const randomColor3 = () => {
    const color = randomColor();
    setInput3(color);
    setColor3(color);
  }

  const randomColor4 = () => {
    const color = randomColor();
    setInput4(color);
    setColor4(color);
  }

  const randomColorBg = () => {
    if (!bgLock) {
      const color = randomColor();
      setInputBg(color);
      setColorBg(color);
    }
  }

  const randomizeAll = () => {
    randomColor1()
    randomColor2()
    randomColor3()
    randomColor4()
    if (!bgLock) randomColorBg()
  }


  
  return (
    <div className="App">
      <section className="settings">
        <h1>Color Blender
          <p>Inspired by the mobile game Blendoku</p>
          <p>See more of my work <a href="https://salcross.github.io">here</a></p>
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Corner Colors</h2>
          <p>(Accepts a <a 
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/named-color" target="_blank"
            rel="noopener noreferrer" >
              CSS color name</a> or hex value)
          </p>
          <section className="corners">
            <Corner1
              input1={input1}
              setInput1={setInput1}
              color1={color1}
              setColor1={setColor1}
              randomColor1={randomColor1}
              borderRadius={borderRadius}
              regex={regex}
            />
            <Corner2
              input2={input2}
              setInput2={setInput2}
              color2={color2}
              setColor2={setColor2}
              randomColor2={randomColor2}
              borderRadius={borderRadius}
              regex={regex}
            />
            <Corner3
              input3={input3}
              setInput3={setInput3}
              color3={color3}
              setColor3={setColor3}
              randomColor3={randomColor3}
              borderRadius={borderRadius}
              regex={regex}
            />
            <Corner4
              input4={input4}
              setInput4={setInput4}
              color4={color4}
              setColor4={setColor4}
              randomColor4={randomColor4}
              borderRadius={borderRadius}
              regex={regex}
            />
          </section>
          <h2>Background Color</h2>
          <BackgroundColor 
            inputBg={inputBg}
            setInputBg={setInputBg}
            setColorBg={setColorBg}
            randomColorBg={randomColorBg}
            regex={regex}
            bgLock={bgLock}
            setBgLock={setBgLock}
          />
          <button onClick={randomizeAll}>Randomize All</button>
          <h2>Other Settings</h2>
          <OtherSettings 
            setHeight={setHeight}
            setWidth={setWidth}
            setBorderRadius={setBorderRadius}
            gapToggle={gapToggle}
            setGapToggle={setGapToggle}
            hexToggle={hexToggle}
            setHexToggle={setHexToggle}
          />
        </form>
      </section>
      <ColorArea 
        colorBg={colorBg}
        colors={colors}
        height={height}
        width={width}
        borderRadius={borderRadius}
        hexToggle={hexToggle}
        gapToggle={gapToggle}
      />
    </div>
  );
}

export default App;

// Ctrl + Alt + R and rafce to shortcut a react component arrow function

//TODO: add tooltips