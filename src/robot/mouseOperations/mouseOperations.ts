import { errorMessage, SOMETHING_WRONG } from '../../utils/constants'
import { clientMessage } from '../../utils/enums'
import { getMouseCoords } from './getMouseCoords'
import { moveMouse } from './moveMouse'

const mouseOperation = (command: string, data: string[]) => {
  try {
    const [coord] = data
    const numCoord = Number(coord)

    switch(command) {
      case clientMessage.mouse_right:
        return moveMouse(numCoord, null)
      case clientMessage.mouse_left:
        return moveMouse(-numCoord, null)
      case clientMessage.mouse_down:
        return moveMouse(null, numCoord)
      case clientMessage.mouse_up:
        return moveMouse(null, -numCoord)
      case clientMessage.mouse_position:
        return getMouseCoords()
      default:
        return errorMessage(command)
    }
  } catch (err) {
    return SOMETHING_WRONG
  }
}

export {
  mouseOperation
}