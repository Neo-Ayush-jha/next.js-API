import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <>
        <nav className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-3xl font-bold">
              <Link href="/">
                <p>News7</p>
              </Link>
            </div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  <p className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <p className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Register</p>
                </Link>
              </li>
              <li>
                <Link href="/insert">
                  <p className="text-white hover:text-gray-200 transition duration-300 ease-in-out">Insert Post</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Header