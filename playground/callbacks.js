// callbacks practice:

const add = (dig1, dig2, callback) => {
	setTimeout(() =>{	
	callback(dig1+dig2)
	}, 2000)
}



add(1, 4, (sum) => {
	console.log(sum)
})