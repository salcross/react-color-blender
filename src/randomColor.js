export const randomColor = () => {
    return rgbToHex(hsvToRgb(randomHsv()));
}

const randomHsv = () => {
    return [
      Math.floor(Math.random() * 360)/360, 
      Math.floor(Math.random() * 100)/100,
      Math.floor(Math.random() * 100)/100
    ]
  }

// From https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately

const hsvToRgb = (hsv) => {
    let r, g, b, i, f, p, q, t
    let [h, s, v] = [hsv[0], hsv[1], hsv[2]]
    i = Math.floor(h * 6)
    f = h * 6 - i
    p = v * (1 - s)
    q = v * (1 - f * s)
    t = v * (1 - (1 - f) * s)
    switch (i % 6) {
        case 0: [r, g, b] = [v, t, p]; break
        case 1: [r, g, b] = [q, v, p]; break
        case 2: [r, g, b] = [p, v, t]; break
        case 3: [r, g, b] = [p, q, v]; break
        case 4: [r, g, b] = [t, p, v]; break
        case 5: [r, g, b] = [v, p, q]; break
    }
    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255)
    ]
}

// RGB to Hex and its helper function from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

const componentToString = (c) => {
    const str = c.toString(16)
    return str.length === 1 ? "0" + str : str
    }

export const rgbToHex = (rgb) => {
    return ("#" + 
        componentToString(rgb[0]) +  
        componentToString(rgb[1]) + 
        componentToString(rgb[2])) 
}