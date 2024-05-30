import React, { useState } from 'react'




export default function Card() {

let number = Math.floor(Math.random() * 13) +1  
let suit = Math.floor(Math.random() * 4) +1 
let CardValue = number

// const [suit, setSuit] = useState("TOAST")


let chosenSuit = Math.floor(Math.random() * 4) +1  



// set the suit from the random function
if (chosenSuit === 1){
     suit = <i className="fa-solid fa-clover"></i>
} 
if (chosenSuit === 2){
    suit = <i className="fa-solid fa-heart text-red-600"></i>
} 
if (chosenSuit === 3){
    suit = <i className="fa-solid fa-hand-point-up"></i>
} 
if (chosenSuit === 4){
    suit = <i className="fa-solid fa-diamond text-red-500"></i>
} 

// set the card from the random function 
if (number === 11) {
    number = "J"
    CardValue = 10
}
if (number === 12) {
    number = "Q"
    CardValue = 10
}
if (number === 13) {
    number = "K"
    CardValue = 10
}
if (number === 1) {
    number = "A"
    CardValue = 10
}




  return (
    <div className=' p-1 flex flex-col bg-stone-200 min-w-[60px] border-solid border-2 border-sky-950 hover:border-sky-500'>
      <p className='align-left'>{number}</p>
      <p className=' flex justify-center'>{suit}</p>
      <p className=' flex justify-end'>{CardValue}</p>


    </div>
  )
}
