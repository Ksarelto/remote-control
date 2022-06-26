import robot from 'robotjs'
import Jimp from 'jimp';
import { clientMessage } from '../../utils/enums';
import { returnedMessage } from '../../utils/returnedMessage';
import { errorMessage } from '../../utils/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const printScreenOperation = (duplex: any) => {
   const {x, y} = robot.getMousePos()
   const picture = robot.screen.capture(x - 100, y - 100, 200, 200);

   for(let i = 0; i < picture.image.length; i += 4) {
      if(i % 4 === 0) {
        [picture.image[i], picture.image[i + 2]] = [picture.image[i + 2], picture.image[i]]
      } 
   }

   // eslint-disable-next-line no-new
   new Jimp({data: picture.image, width: picture.width, height: picture.height}, (err: unknown, image: Jimp) => {
    if(err) {
     console.log(errorMessage(clientMessage.prnt_scrn))
    }

    image.getBase64Async(Jimp.MIME_PNG).then((value: string) => {
      duplex.write(`${clientMessage.prnt_scrn} ${value.split(',')[1]}`)
      returnedMessage(clientMessage.prnt_scrn, value)
    })
   })
}

export {
  printScreenOperation
}
