import { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io('/')

function App() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMessage = {
      body: message,
      from: 'Me',
    }
    setMessages([...messages, newMessage])
    socket.emit('message', message)
  }

  useEffect(() => {
    socket.on('message', receiveMessage)

    return () => {
      socket.off('message', receiveMessage)
    }
  }, [])

  const receiveMessage = (data) => {
    setMessages((state) => [...state, data])
  }

  return (
    <div className='h-screen bg-zinc-900 text-white flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='bg-zinc-900 p-10'>
        <h1 className='text-2xl font-bold my-2'>Chat React</h1>
        <input
          type='text'
          placeholder='Write your message...'
          className='border-2 border-zinc-500 p-2 w-full text-black'
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>

        <ul>
          {messages.map((msg, i) => (
            <li
              key={i}
              className={`my-2 p-2 table text-sm rounded-md ${
                msg.from === 'Me' ? 'bg-sky-700' : 'bg-black ml-auto'
              }`}
            >
              <span className='text-xs text-slate-300 block'>{msg.from}</span>
              <span className='text-md'>
              {msg.body}

              </span>
            </li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default App
