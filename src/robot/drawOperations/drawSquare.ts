import robot from 'robotjs'

const drawSquare = (data: string[]) => {
  const [width] = data
  const numWidth = Number(width)
  const {x, y} = robot.getMousePos();
  robot.mouseClick('left')
  robot.mouseToggle('down')
  robot.moveMouseSmooth(x + numWidth - 2, y)
  robot.moveMouseSmooth(x + numWidth, y + numWidth)
  robot.moveMouseSmooth(x, y + numWidth)
  robot.moveMouseSmooth(x, y)
  robot.mouseToggle('up')
}

export {
  drawSquare
}