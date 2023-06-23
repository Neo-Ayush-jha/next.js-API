import News from '@/app/composers/News'
import Slider from '@/app/composers/Slider'
import React from 'react'

const page = async ({ params }) => {
  let { postid } = params
  let data = await fetch(process.env.DOMAIN + `/post/${postid}`)
  data = await data.json()
  return (
    <>
      <div className="flex">
        <div className="w-2/12 bg-yellow-200 h-[93vh]">
          <Slider />
        </div>
        <div className='w-10/12 p-5 bg-yellow-100 flex flex-col gap-2'>
        <News props={data.data} />
      </div>
    </div >
    </>
  )
}

export default page