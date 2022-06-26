import { errorMessage, SOMETHING_WRONG } from "../../utils/constants";
import { clientMessage } from "../../utils/enums";
import { drawCircle } from "./drawCircle";
import { drawRectangle } from "./drawRectangle";
import { drawSquare } from "./drawSquare";

const drawOperations = (command: string, data: string[]) => {
  try {
    const [, figure] = command.split('_')

    switch(command){
      case clientMessage.draw_circle:
        drawCircle(data)
        break;
      case clientMessage.draw_square:
        drawSquare(data)
        break;
      case clientMessage.draw_rectangle:
        drawRectangle(data)
        break;
      default:
        return errorMessage(command)
    }

    return `${figure} is drown`
  } catch (err) {
    return SOMETHING_WRONG
  }
}

export {
  drawOperations
}