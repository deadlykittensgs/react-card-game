import React, { useState } from 'react'
import Card from './Card'







export default function PlayersHand() {
  const [PlayersHandCards, setPlayersHandCards] = useState([0])


  function drawCard() {
  let hand = [<Card/>]
  hand.push(<Card/>)



  setPlayersHandCards(hand)


    console.log("hello")
    
  }
  




  return (
    <section className='flex bg-green-400 content-center justify-center gap-3 p-8'>

<div className='flex flex-col bg-blue-300'> 
      <button onClick={drawCard} >Card</button>
    <p>options</p>
    <p>options</p>
  </div>
      <div className='flex gap-4'>
     {PlayersHandCards}
      </div>
   

<div className='flex flex-col bg-red-400'>
<p>options</p>
<p>options</p>
<p>options</p>
        </div>
    </section>
  )
}
