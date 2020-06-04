const request = require('postman-request')


const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3RhYmJlcnMiLCJhIjoiY2thd3BicmpzMG01OTJwbzcxcnhpYjFuaiJ9.dCrKTz_kcaKkU90EE0QmHQ&limit=1'
	
	request({ url, json: true}, (error, {body} = {}) => {
		if (error) {
			callback('unable to connect to network Geocoder Service', undefined)
		}
		else if (body.features.length == 0) {
			callback('Unable to find Location', undefined)
		}
		else {
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name
			})
		}
	})
}

module.exports = geocode