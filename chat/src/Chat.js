import React, { Component } from 'react'
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import './App.css'

const URL = 'ws://localhost:3030'

class Chat extends Component {
  state = {
    name: '',
    messages: []
  }

  ws = new WebSocket(URL)

  componentDidMount () {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      this.addMessage(message)
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL)
      })
    }
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: messageString }
    this.ws.send(JSON.stringify(message))
    this.addMessage(message)
  }

  render () {
    return (
      <div className='container'>
        <div>
          <h1>chat with us !</h1>
        </div>
        <label className='name'>
          <img src='https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568244-stockillustratie-mannelijke-gezicht-avatar-logo-sjabloon.jpg' />
          Name :
          <input
            className='nameInput'
            type='text'
            placeholder={' Enter your name...'}
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>

        {this.state.messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
          />
        ))}
        <ChatInput
          ws={this.ws}
          onSubmitMessage={messageString => this.submitMessage(messageString)}
        />
      </div>
    )
  }
}

export default Chat
