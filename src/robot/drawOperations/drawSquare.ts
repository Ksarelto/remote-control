import robot from 'robotjs'

const drawSquare = (data: string[]) => {
  const [width] = data
  const numWidth = Number(width) / 1.25
  const {x, y} = robot.getMousePos();
  robot.mouseToggle('down')
  robot.moveMouseSmooth(x + numWidth, y)
  robot.moveMouseSmooth(x + numWidth, y + numWidth)
  robot.moveMouseSmooth(x, y + numWidth)
  robot.moveMouseSmooth(x, y)
  robot.mouseToggle('up')
}

export {
  drawSquare
}