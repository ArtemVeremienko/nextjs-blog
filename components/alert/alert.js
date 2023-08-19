import { clsx } from 'clsx'

export default function Alert({ children, type }) {
  return (
    <div
      className={clsx(
        {
          ['bg-green-600']: type === 'success',
          ['bg-red-600']: type === 'error',
        },
        'rounded-full text-white font-medium px-3 py-1 text-center'
      )}
    >
      {children}
    </div>
  )
}
