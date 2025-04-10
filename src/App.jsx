import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from '/src/Die.jsx'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {
  const buttonRef = useRef(null)
  const [dice, setDice] = useState(() => generateAllNewDice())

  const gameWon = (
    dice.every(prevDie => prevDie.isHeld) &&
    dice.every(prevDie => prevDie.value == dice[0].value)
  )

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus()
    }
  }, [gameWon])

  function generateAllNewDice() {
    const diceElement = []
    for (let i = 0; i < 10; i++) {
      diceElement.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      })
    }
    return diceElement
  }

  const diceElements = dice.map(dieObj => (
    <Die
      hold={() => hold(dieObj.id)}
      isHeld={dieObj.isHeld}
      value={dieObj.value}
      key={dieObj.id} />
  ))

  function rollDice() {
    if (gameWon) {
      setDice(generateAllNewDice())
    } else {
      setDice(oldDice => oldDice.map(die =>
        die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}
      ))
    }
  }

  function hold(id) {
    console.log(id)
    setDice(oldDice => oldDice.map(die =>
        die.id === id ? {...die, isHeld: !die.isHeld} : die
      ))
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <main>
        {gameWon && <Confetti />}
        <div aria-live="polite" className="sr-only">
          {gameWon && <p>"Congratulations! You won! Press New Game to start again."</p>}
        </div>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="die-container">
          {diceElements}
        </div>
        <button ref={buttonRef} className='roll-dice' onClick={rollDice}>{gameWon ? "New Game" : "ROLL"}</button>
      </main>
    </>
  )
}
