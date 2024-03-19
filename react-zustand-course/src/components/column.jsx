import { useState } from 'react'
import { useStore } from '../store'
import './column.css'
import { Task } from './task'
import classNames from 'classnames'

export function Column({ state }) {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState(false)
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  )
  const addTask = useStore((store) => store.addTask)
  const setDraggedTask = useStore((store) => store.setDraggedTask)
  const draggedTask = useStore((store) => store.draggedTask)
  const moveTask = useStore((store) => store.moveTask)

  return (
    <div
      className={classNames('column', { drop: drop })}
      onDragOver={(e) => {
        setDrop(true)
        e.preventDefault()
      }}
      onDragLeave={(e) => {
        setDrop(false)
        e.preventDefault()
      }}
      onDrop={(e) => {
        moveTask(draggedTask, state)
        setDraggedTask(null)
      }}
    >
      <div className='titleWrapper'>
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks.map((task) => (
        <Task key={task.title} title={task.title} />
      ))}
      {open && (
        <div className='Modal'>
          <div className='modelContent'>
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button
              onClick={() => {
                addTask(text, state)
                setText('')
                setOpen(false)
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
