import Link from 'next/link'

export default function Button({ children, to = '/', external = false }) {
  return (
    <Link href={to}>
      <a
        target={external ? '_blank' : ''}
        className="pointer
          space-x-2 py-2 px-4
          bg-blue-200 rounded-md
          inline-flex items-center
          font-bold text-blue-600 text-xs
        "
      >
        { children }
      </a>
    </Link>
  )
}