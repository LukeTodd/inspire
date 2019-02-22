import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImg() {

  document.querySelector('#bg-image').style.backgroundImage = `url(${_is.ImgApi.url})`
}

export default class ImageController {
  constructor() {
    _is.addSubscriber('image', drawImg)
    _is.getImgData()
  }

}


