import React from 'react'
import Card from './Card'



export default function PlayersHand() {
  return (
    <section className='flex bg-green-400 content-center justify-center gap-3 p-8'>
      <Card/>
        <Card/>
        <Card/>
    </section>
  )
}
