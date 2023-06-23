"use client"
import Slider from './composers/Slider'
import News from './composers/News';

const home = async()=> {
  let callingNews = await fetch("http://localhost:3000/api/post",{cache:"no-store"});
  callingNews = await callingNews.json();
  return (
    <>
      <div className="flex">
        <div className="w-2/12 bg-yellow-200">
          <Slider/>
        </div>
        <div className='w-10/12 p-5 bg-yellow-100 flex flex-col gap-2'>
            {callingNews.data.map((props, key) => (<News props={props} key={key} read={true}/>))}
        </div>
      </div>
    </>
  )
}
export default home