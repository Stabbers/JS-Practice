const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


//Weatherstack API access Key:
//24f0459c628fc1a783077e984431f633
//baseURL: http://api.weatherstack.com/

// geocode( 'Boulder', (error, data) => {
// 	console.log( 'Error: ', error)
// 	console.log('Data: ', data)
// })

// forecast(43.651070, -79.347015, (error, data) => {
//   console.log('Error: ', error)
//   console.log('Data: ', data)
// })

// forecast(34.0633, -117.6509, (error, data) => {
//   console.log('Error: ', error)
//   console.log('Data: ', data)
// })

//user input for 3rd input, the command within the weather App.
const command = process.argv[2]

if (command) {
	geocode( command.toString() , (error, {latitude, longitude, location} = {}) => {
	if (error) {
		return console.log( 'Error: ', error)
	}

	//console.log('Data: ', data)
	forecast(latitude, longitude, (error, fdata) => {
		if (error) {
		return console.log('Error: ', error)
		}

		console.log('Place: ', location)
		console.log('Data: ', fdata)
	})
	})
}
else {
	console.log('nowhere looked up in the calls, please call again with any location.')
}

// geocode( 'Boston', (error, data) => {
// 	if (error) {
// 		return console.log( 'Error: ', error)
// 	}

// 	//console.log('Data: ', data)
// 	forecast(data.latitude, data.longitude, (error, fdata) => {
// 		if (error) {
// 		return console.log('Error: ', error)
// 		}

		
// 		console.log('Place: ', data.location)
// 		console.log('Data: ', fdata)
// 	})
// })