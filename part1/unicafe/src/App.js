import { useState } from 'react'

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
    </button>
)

const Header = ({headertitle}) => <h1>{headertitle}</h1>

const Statistics = ({title, amount}) => <p> {title}:{amount} </p>

const AllStats = ({good, bad, neutral}) => {
  const total = (good + neutral + bad)
  if (total === 0) {
    return (
     <div>
      Begin by pressing a response
      </div>
    )
  }
  return (
    <div>
      <Header headertitle="statistics" />
      <table>
        <tbody>
          <tr><Statistics title="good" amount={good}/></tr>
          <tr><Statistics title="neutral" amount={neutral}/></tr>
          <tr><Statistics title="bad" amount={bad}/></tr>
          <tr><Statistics title="all" amount={total}/></tr>
          <tr><Statistics title="average" amount={((good - bad) / total).toFixed(2)}/></tr>
          <tr><Statistics title="positive" amount={(good / total).toFixed(2)}/></tr>
      </tbody>
    </table>
    </div>
  )
  
}
const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header headertitle="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text = "good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text = "neutral" />
      <Button handleClick={() => setBad(bad + 1)} text = "bad" />
      <AllStats good={good} neutral={neutral} bad={bad}/>   
    </div>
  )
}

export default App
