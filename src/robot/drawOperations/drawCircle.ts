import robot from 'robotjs'

const drawCircle = (data: string[]) => {
  const [radius] = data
  const numRadius = Number(radius)  / 1.25
  const mousePos = robot.getMousePos();
  robot.moveMouse(mousePos.x + numRadius, mousePos.y)
  robot.mouseToggle('down')

  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
      const x = mousePos.x + (numRadius * Math.cos(i));
      const y = mousePos.y + (numRadius * Math.sin(i));
      
      robot.moveMouse(x, y);
  }

  robot.mouseToggle('up')
}

export {
  drawCircle
}