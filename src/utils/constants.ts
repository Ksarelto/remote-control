const SOMETHING_WRONG = 'Something went wrong.'
const CONNECTED = 'New Socket connected!'

const frontMessage = (command: string, response: string) => `${command} ${response} \0`
const errorMessage = (command: string) => `\n${SOMETHING_WRONG} Command: ${command} is failed`

export {
  frontMessage,
  errorMessage,
  SOMETHING_WRONG,
  CONNECTED
}