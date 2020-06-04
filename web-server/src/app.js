const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('postman-request')
const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')

//config setup
const app = express()
const pubDir = path.join(__dirname, '../public')
const templates = path.join(__dirname, '../templates/views')
const partials = path.join(__dirname, '../templates/partials')

//Handlebars setup (Require needed if using partials)
app.set('view engine', 'hbs')
app.set('views', templates)
hbs.registerPartials(partials)

//Server static directory
app.use(express.static(pubDir))

//the Display of the main page, using Handlebars Templates
app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather',
		name: 'Made by: Cobine, Pawts'
	})
})

//About Page Template Fetch
app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About:',
		name: 'Cobine, Pawts'
	})
})

//Help Page Template Fetch
app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help:',
		name: 'Cobine, Pawts', 
		message: 'no help here'
	})
})

//DEPRICATED: since we have a base file override, this never loads
// //What to do when making a server request, to base Directory, and a what to do in it
// app.get('', (req, res) => {
// 	//send pushed to the Browser some data, that gets rendered in a format it accepts, so either HTML or CSS information, with backend data being .JSON information
// 	res.send('Good news, everyone! Express responded...')
// })

app.get('/weather', (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: 'you must provide a search address'
		})
	}
	geocode( req.query.address.toString() , (error, {latitude, longitude, location} = {}) => {
		if (error) {
			return res.send({
				error: 'Search address not found'
			})
		}
		forecast(latitude, longitude, (error, fdata) => {
			if (error) {
				return res.send({
					error: 'Search address Weatheer Data not found'
				})
			}
			res.send({
				Place: {
					address: req.query.address,
					location, 
					latitude, 
					longitude
				},
				forecast: fdata
			})
		})
		})
})


//fetches STUFF
app.get('/stuff*', (req, res) => {
	if (!req.query.search) {
		return res.send({
			error: 'you must provide a search term'
		})
	}
	console.log(req.query.search)
	res.send({
		products: []
	})
})

//Exception error in Help Section
app.get('/help/*', (req, res) => {
	res.render('404help')
})

//EXCEPTION ERROR for when nothing is found, uses * for wildcard when nothing else is found
app.get('*', (req, res) => {
	res.render('404')
})

// server initialization. best practice: use nodemon, and port 3000
app.listen(3000, () => {
	console.log('the port is on three THOUSAAAND!')
})