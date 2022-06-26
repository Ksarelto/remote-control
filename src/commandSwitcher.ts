import { drawOperations } from "./robot/drawOperations/drawOperations"
import { mouseOperation } from "./robot/mouseOperations/mouseOperations"
import { errorMessage } from "./utils/constants"
import { commands } from "./utils/enums"

const commandSwitcher = (command: string, data: string[]) => {
  const [commandPrefix] = command.split('_')

  switch(commandPrefix){
    case commands.mouse:
     return mouseOperation(command, data)
    case commands.draw:
      return drawOperations(command, data)
    default:
      return errorMessage(command)
  }
}

export {
  commandSwitcher
}