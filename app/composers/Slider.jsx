import Link from 'next/link'
import React from 'react'

function Slider() {
  return (
    <>
        <div className="flex flex-col px-3 text-2xl">
            <Link href="/">Crime</Link>
            <Link href="/">Sport</Link>
            <Link href="/">Movie</Link>
            <Link href="/">Purnea</Link>
        </div>
    </>
  )
}

export default Slider