'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function InsertForm() {
    const router= useRouter()
        const [title,setTitle] =useState("")
        const [author,setAuth] =useState("")
        const [content,setContent] =useState("")
        const handelSubmit=async(e)=>{
            e.preventDefault();
            let data = await fetch("/api/post",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({title,author,content})
            })
            data = await data.json();
            alert(data.msg);
            router.push("/")
        }
  return (
    <>
        <div className="w-6/12 mx-auto">
            <form action="" onSubmit={handelSubmit}>
                <div className="flex flex-col mb-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} id='title' className="border w-full px-3 py-2" />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="title">Author</label>
                    <input type="text" value={author} onChange={(e)=>setAuth(e.target.value)} id='author' className="border w-full px-3 py-2" />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="title">Content</label>
                    <input type="text" value={content} onChange={(e)=>setContent(e.target.value)} id='content' className="border w-full px-3 py-2" />
                </div>
                <div className="flex">
                    <input type="submit" value="Submit" className="bg-teal-500 text-white px-3 py-2 rounded w-full" />
                </div>
            </form>
        </div>
    </>
  )
}

export default InsertForm