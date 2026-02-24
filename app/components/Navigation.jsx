import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <div>
        <div>
            Logo
        </div>
        <nav className='flex'>
            <ul className='flex gap-2 bg-white text-black '>
                <li>
                   <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation