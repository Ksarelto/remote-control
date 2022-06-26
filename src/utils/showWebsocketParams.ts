import { ServerOptions } from "ws"

const showWebsocketParams = (params: ServerOptions) => {
  console.log(`
Websocket params:
    PORT: ${params.port}
    NoServer: ${params.noServer}
    ClientTracking: ${params.clientTracking}
    Path: ${params.path}
    `)
}

export {
  showWebsocketParams
}