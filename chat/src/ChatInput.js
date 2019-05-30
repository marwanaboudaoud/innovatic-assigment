// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// class ChatInput extends Component {
//   handleChange = e => {
//     fetch('http://www.mocky.io/v2/5cee37a5300000253a6e99af', {
//       method: 'post',
//       body: JSON.stringify()
//     })
//       .then(function (response) {
//         return response.json()
//       })
//       .then(function (data) {
//         document.getElementById('handleChangeId').innerHTML = data.message
//       })

//     e = e || window.event
//     e.preventDefault()
//     this.props.onSubmitMessage(this.state.message)
//     this.setState({ message: '' })
//   }

//   handleSubmit = e => {
//     fetch('http://www.mocky.io/v2/5cee37a5300000253a6e99af', {
//       method: 'post',
//       body: JSON.stringify()
//     })
//       .then(function (response) {
//         return response.json()
//       })
//       .then(function (data) {
//         document.getElementById('handleSubmitId').innerHTML = data.message
//       })

//     e = e || window.event
//     e.preventDefault()
//     this.props.onSubmitMessage(this.state.message)
//     this.setState({ message: '' })
//   }

//   static propTypes = {
//     onSubmitMessage: PropTypes.func.isRequired
//   }
//   state = {
//     message: ''
//   }

//   render () {
//     return (
//       <form id='handleSubmitId' action='.' onSubmit={this.handleSubmit}>
//         <div id='handleChangeId' />
//         <input
//           className='message'
//           type='text'
//           placeholder={'Enter message...'}
//           value={this.state.message}
//           onSubmit={this.handleChange}
//           onChange={e => {
//             this.setState({ message: e.target.value })
//           }}
//         />

//         <input className='send' type='submit' value={'Send'} />
//       </form>
//     )
//   }
// }

// export default ChatInput

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatInput extends Component {
  handleSubmit = e => {
    fetch('http://www.mocky.io/v2/5cee37a5300000253a6e99af', {
      method: 'post',
      body: JSON.stringify()
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        document.getElementById('demo').innerHTML = data.message
      })

    e = e || window.event
    e.preventDefault()
    this.props.onSubmitMessage(this.state.message)
    this.setState({ message: '' })
  }
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired
  }
  state = {
    message: ''
  }

  render () {
    return (
      <form action='.' onSubmit={this.handleSubmit}>
        <form />
        <div id='demo' />
        <input
          className='message'
          type='text'
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => {
            this.setState({ message: e.target.value })
          }}
        />

        <input className='send' type='submit' value={'Send'} />
      </form>
    )
  }
}

export default ChatInput
