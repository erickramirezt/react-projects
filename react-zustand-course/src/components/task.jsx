import classNames from 'classnames'
import './task.css'

const STATUS = 'DONE'

export function Task({ title }) {
  return (
    <div className='task'>
      <div>{title}</div>
      <div className='bottomWrapper'>
        <div></div>
        <div className={classNames('status', STATUS)}>{STATUS}</div>
      </div>
    </div>
  )
}
