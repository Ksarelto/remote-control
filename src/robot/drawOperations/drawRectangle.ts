import robot from 'robotjs'

const drawRectangle = (data: string[]) => {
  const [width, height] = data
  const numWidth = Number(width)
  const numHeight = Number(height)
  const {x, y} = robot.getMousePos();
  robot.mouseClick('left')
  robot.mouseToggle('down')
  robot.moveMouseSmooth(x + numWidth, y)
  robot.moveMouseSmooth(x + numWidth, y + numHeight)
  robot.moveMouseSmooth(x, y + numHeight)
  robot.moveMouseSmooth(x, y)
  robot.mouseToggle('up')
}

export {
  drawRectangle
}