import classNames from 'classnames'
import './task.css'
import { useStore } from '../store'

// const STATUS = 'DONE'

export function Task({ title }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  )
  const setDraggedTask = useStore((store) => store.setDraggedTask)
  const deleteTask = useStore((store) => store.deleteTask)
  return (
    <div
      className='task'
      draggable
      onDragStart={() => {
        setDraggedTask(task.title)
      }}
    >
      <div>{task.title}</div>
      <div className='bottomWrapper'>
        <div onClick={() => deleteTask(task.title)} className='delete'>
          Delete
        </div>
        <div className={classNames('status', task.state)}>{task.state}</div>
      </div>
    </div>
  )
}
