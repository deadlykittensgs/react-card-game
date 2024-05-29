import React from 'react'
import Card from './Card'



export default function DrawPile() {
  return (
    <section className='flex bg-green-400 content-center justify-center gap-5 p-8'>
  <div className=' p-1 flex flex-col bg-red-600 min-w-[60px] border-solid border-2 border-sky-950 hover:border-sky-500'>
 </div>
  <Card/>
    </section>
  )
}
