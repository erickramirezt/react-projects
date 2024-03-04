import { useState } from 'react'
import io from 'socket.io-client'

const socket = io('/')

function App() {
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('message', message)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Write your message...'
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  )
}

export default App
