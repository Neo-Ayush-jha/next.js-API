'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const News = ({ props, read }) => {
  const router = useRouter()
  const hendelDelete = async (id) => {
    let data =await fetch(`/api/post/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
    data = await data.json()
    // alert(data.msg)
    router.push("/")
  }
  return (
    <div className='flex-1 flex flex-col px-3 py-4 rounded bg-red-200 gap-2'>
      <h1 className='font-bold text-3xl'>{props.title}</h1>
      <p className='text-slate-500'>Author: {props.author} | Date: {props.createdAt}</p>
      <p>{props.content}</p>
      <div className="flex justify-end">
        {read && <Link href={`/view/${props._id}`} className='bg-teal-600 text-white px-3 py-2 rounded'>Read More</Link>}
        {!read && <Link href={`/update/${props._id}`} className='bg-teal-600  text-white px-3 py-2 rounded'>Update</Link>}
        {!read && <button onClick={() => hendelDelete(props._id)} className='bg-red-600 ml-3 text-white px-3 py-2 rounded'>Delete</button>}
      </div>
    </div>
  )
}

export default News