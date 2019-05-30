// // postData('http://www.mocky.io/v2/5cee37a5300000253a6e99af', {})
// //   .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
// //   .catch(error => console.error(error))

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

// import React, { Component } from 'react'

// class Fetch extends Component {
//   fetchApi = e => {
//     fetch('http://www.mocky.io/v2/5cee37a5300000253a6e99af', {
//       method: 'post',
//       body: JSON.stringify()
//     })
//       .then(function (response) {
//         return response.json()
//       })
//       .then(function (data) {
//         document.getElementById('demo').innerHTML = data.message
//       })
//     e = e || window.event
//     e.preventDefault()
//   }

//   render () {
//     return (
//       <div className='App'>
//         <h1>If we didn't answer you please leave a massege here </h1>
//         <div id='demo' />
//         <form type='submit' onSubmit={this.fetchApi}>
//           <input placeholder='your Message ' />
//           <button>Send</button>
//         </form>
//       </div>
//     )
//   }
// }

// export default Fetch
