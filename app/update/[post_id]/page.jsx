import Slider from '@/app/composers/Slider'
import UpdateForm from '@/app/composers/UpdateForm'
import React from 'react'

const page = async ({ params }) => {
    let { post_id } = params
    let callingDataForUpdate = await fetch(process.env.DOMAIN + `/post/${post_id}`)
    callingDataForUpdate = await callingDataForUpdate.json();
    return (
        <>
            <div className="flex">
                <div className="w-2/12 bg-yellow-200 h-[93vh]">
                    <Slider />
                </div>
                <div className='w-10/12 flex justify-center h-[95vh]'>
                <div className="w-10/12 p-3">
                <h2 className="text-4xl text-center items-center">Update data</h2>
                        <UpdateForm value={callingDataForUpdate.data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page