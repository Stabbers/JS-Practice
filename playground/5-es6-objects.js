//5-es6-obects

//object property shorthand

const name = 'Corbin'
const userAge = '31'
const userCompany = 'EarthCoast'


const user = {
	name,
	age: userAge,
	location: 'Boulder, CO',
	company: userCompany
}

console.log(user)

//object destructuring
const product = {
	label: 'Green Apple',
	price: 2,
	stock: 6500,
	salePrice: undefined
}

//Destructuring can create New names for object componnents
//format: const {oldLabel: newLabel} = objectName
//allows you to pass anything in, by a list of it's properties, and just check those, with : overriding names along the way
// const {label: productLabel, stock, rating = 5} = productLabel
// console.log(label)
// console.log(stock)
// console.log(productLabel)

const transaction = (type, {label, stock}) => {
	console.log(type, label, stock)
}

transaction('order', product)