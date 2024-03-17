import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={twMerge(
        clsx(
          'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  )
}
