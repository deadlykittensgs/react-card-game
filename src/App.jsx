import { useState } from 'react'
import './App.css'
import DrawPile from './Components/DrawPile'
import PlayersHand from './Components/PlayersHand'
import DealersHand from './Components/DealersHand'



function App() {

const [DealersHandValue, setDealersHandValue] = useState(null)
const [PlayersHandValue, setPlayersHandValue] = useState(null)

if (DealersHandValue > 21) {
  console.log("player Wins")
}
if (PlayersHandValue > 21) {
  console.log("Dealer Wins")
}


  return (
   <section className='flex flex-col flex-1 bg-green-600 h-screen justify-between'>
   <DealersHand/>
   <DrawPile/>
   <PlayersHand/>
  </section>
  )
}

export default App
