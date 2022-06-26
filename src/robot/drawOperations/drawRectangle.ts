import robot from 'robotjs'

const drawRectangle = (data: string[]) => {
  const [width, height] = data
  const numWidth = Number(width)  / 1.25
  const numHeight = Number(height) / 1.25
  const {x, y} = robot.getMousePos();
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