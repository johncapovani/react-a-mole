import { useState } from 'react'
import MoleContainer from './components/MoleContainer'
import '../src/App.css'

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 10; i++) {
      hills.push(
        <MoleContainer
          key={i}
          setScore={setScore}
          score={score} />
      )
    }

    return (
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      <p>To collect points hit the mole that is above ground. For each mound you hit that does not contain a mole one point will be substracted from your score.</p>
      {score}
      {createMoleHill()}
    </div>
  )
}

export default App
