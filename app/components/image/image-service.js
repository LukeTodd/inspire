import Image from "../../models/image.js";

// @ts-ignore
const _imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 5000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class ImageService {

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get ImgApi() {
		return _state.image
	}

	getImgData() {
		_imgApi.get('')
			.then(res => {
				console.log(res)
				let data = new Image(res.data)
				setState('image', data)
			})
	}

}
