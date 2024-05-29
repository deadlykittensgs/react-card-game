import React from 'react'
import Card from './Card'



export default function PlayersHand() {
  return (
    <section className='flex bg-green-400 content-center justify-center gap-3 p-8'>

<div className='flex flex-col bg-blue-300'> 
      <p>options</p>
    <p>options</p>
    <p>options</p>
      </div>
      <Card/>
      <Card/>
      <Card/>

        <div className='flex flex-col bg-red-400'>
<p>options</p>
<p>options</p>
<p>options</p>
        </div>
    </section>
  )
}
