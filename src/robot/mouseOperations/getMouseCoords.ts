import robot from 'robotjs'

const getMouseCoords = () => {
  const {x, y} = robot.getMousePos()

  return `${x},${y}`
}

export {
  getMouseCoords
}