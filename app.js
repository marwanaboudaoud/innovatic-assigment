// const express = require('express')
// const bodyParser = require('body-parser')

// const app = express()
// app.use(bodyParser.json())

// app.get('http://www.mocky.io/v2/5cee37a5300000253a6e99af', function (req, res) {
//   console.log('i receive a GET request')

//   res.json()
// })

// // function postData (url = '', data = {}) {
// //   return fetch(url, {
// //     method: 'POST',
// //     mode: 'cors',
// //     cache: 'no-cache',
// //     credentials: 'same-origin',
// //     headers: {
// //       'Content-Type': 'application/json'
// //     },
// //     redirect: 'follow',
// //     referrer: 'no-referrer',
// //     body: JSON.stringify(data)
// //   }).then(response => response.json())
// // }

// // function submitMessage () {
// //   var content = document.querySelector('message').value
// //   if (content) {
// //     fetchApi({
// //       description: 'Fetch API Post ',
// //       public: true,
// //       files: {
// //         message: {
// //           content: content
// //         }
// //       }
// //     })
// //   } else {
// //     console.log('Please enter in content to POST to a new message.')
// //   }
// // }

// // let submitBtn = document.querySelector('button')
// // submitBtn.addEventListener('click', submitMessage)

// app.listen('8080', () => {
//   console.log('listening on port 8080')
// })

postData('http://www.mocky.io/v2/5cee37a5300000253a6e99af', {})
  .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error))

function postData (url = '', data = {}) {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data)
  }).then(response => response.json())
}
