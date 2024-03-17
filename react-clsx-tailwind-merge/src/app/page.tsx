'use client'

import { clsx } from 'clsx'
import { Button } from './components/ui/button'

export default function Home() {
  const value = 10

  return (
    <div>
      <Button
        className={clsx({
          'bg-green-500 hover:bg-green-600': value > 10,
          'bg-yellow-500 hover:bg-yellow-700': value === 10,
          'bg-blue-500 hover:bg-blue-700': value < 10,
        })}
        type='button'
        onClick={() => {
          alert("Hello world!")
        }}
      >
        Hello World
      </Button>
    </div>
  )
}
