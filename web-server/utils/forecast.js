// some info comments
const request = require('postman-request')

// Forecasting callback, gets location, and returns data about it from the Weathestack API
const forecast = (lat, lon, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=24f0459c628fc1a783077e984431f633&query='+ encodeURIComponent(lat) + ',' + encodeURIComponent(lon) + ''
	
	request({ url, json: true}, (error, {body}={}) => {
		if (error) {
			callback('unable to connect to network Weather Service', undefined)
		}
		else if (body.error) {
			callback(['Error code: ' + body.error.code, 'Reason: ' + body.error.info], undefined)
		}
		else {
			callback(undefined, {
				location: body.location.name,
				region: body.location.region,
				temp: body.current.temperature,
				feelsLike: body.current.feelslike,
				precipChance: body.current.precip

			})
		}
	})
}

module.exports = forecast