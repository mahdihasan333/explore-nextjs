import Link from 'next/link'
import React from 'react'

export default function NotFoundPage404() {
  return (
    <div className='flex flex-col gap-6 justify-center items-center h-full w-full'>
      <h2>404 Not Found</h2>
      <Link href='/'>Go Back to Home</Link>
    </div>
  )
}
