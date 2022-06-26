import robot from 'robotjs'

const moveMouse = (x: number | null, y: number | null) => {
  const mousePosition = robot.getMousePos()
  const xCoord = x ? mousePosition.x + x : mousePosition.x
  const yCoord = y ? mousePosition.y + y : mousePosition.y

  robot.moveMouse(xCoord, yCoord)

  return `${xCoord}, ${yCoord}`
}

export {
  moveMouse
}