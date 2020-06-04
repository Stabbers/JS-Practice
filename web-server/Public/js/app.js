// console.log('ClientSide .JS File Loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=' + (searchVal = 'Boulder')).then((response) => {
//     if (!response) {
//         return console.log('Incorrect Query Error')
//     }
//     response.json().then((data) => {
//         if (data.error) {
//             return console.log('data.error')
//         }
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

msg1.textContent = 'From JavaScript'
msg2.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    console.log('Looking-up: ' + location)
    msg1.textContent = 'Loading Weather Data...'
    msg2.textContent = '...'

    fetch('/weather?address=' + encodeURIComponent(location)).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            msg1.textContent = 'Error: '
            msg2.textContent = data.error
        }
        else {
            msg1.textContent = data.forecast.location + ", " + data.forecast.region
            msg2.textContent = 'Current Temp: ' + data.forecast.temp + ' degrees C, and it feels like: ' + data.forecast.feelsLike + ', with a ' + data.forecast.precipChance + '% chance of Rain.'
            console.log(data)
        }
        
    })
})
    
})