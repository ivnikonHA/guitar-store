import { BACKEND_URL, UPLOAD_PATH } from './consts'

export const getImage = (fileName: string | undefined) => {
  if(!fileName) {
    fileName = 'no-image.png';
  }
  return `${BACKEND_URL}${UPLOAD_PATH}${fileName}`
}
