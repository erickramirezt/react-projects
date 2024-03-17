import { useStore } from '../store'
import './column.css'
import { Task } from './task'

export function Column({ state }) {
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  )

  return (
    <div className='column'>
      <p>{state}</p>
      
      <Task title={'Todo'} />
    </div>
  )
}
