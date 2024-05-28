import { useState } from 'react'
import './App.css'
import DrawPile from './Components/DrawPile'
import PlayersHand from './Components/PlayersHand'
import DealersHand from './Components/DealersHand'

function App() {
  const [count, setCount] = useState(0)

  return (
   <section className='flex flex-col flex-1 bg-blue-300 h-screen justify-between'>
   <DealersHand/>
   <DrawPile/>
   <PlayersHand/>
  </section>
  )
}

export default App
