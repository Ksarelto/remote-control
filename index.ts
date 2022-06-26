import { createWebSocketStream, WebSocketServer } from 'ws';
import {httpServer} from './src/http_server/index';
import { commandSwitcher } from './src/commandSwitcher';
import { printScreenOperation } from './src/robot/printScreenOperation/printScreenOperation';
import { returnedMessage } from './src/utils/returnedMessage';
import { clientMessage } from './src/utils/enums';
import { CONNECTED, frontMessage, SOMETHING_WRONG } from './src/utils/constants';
import { showWebsocketParams } from './src/utils/showWebsocketParams';

const socket = new WebSocketServer({port: 8080})

showWebsocketParams(socket.options)

socket.on('connection', ws => {
  console.log(CONNECTED)
  
  const duplex = createWebSocketStream(ws, { encoding: 'utf-8' , decodeStrings: false})

  duplex.on('error', (err) => {
    console.log(err.message)
  })

  duplex.on('data', (chunk) => {
    const [command, ...data] = chunk.split(' ')

    if(command === clientMessage.prnt_scrn) {
      printScreenOperation(duplex)
      return
    }

    const response = commandSwitcher(command, data)

    if(response === SOMETHING_WRONG) {
      console.log(SOMETHING_WRONG)
      return
    }

    duplex.write(frontMessage(command, response))
    returnedMessage(command, response)
  })
})


process.on('SIGINT', () => {
  process.stdout.write('Websocket will be closed!\n');
  socket.close();
  process.exit(0);
});

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
