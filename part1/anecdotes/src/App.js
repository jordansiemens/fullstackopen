import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button> 
const Header = ({header}) => <h1>{header}</h1>
const Anecdote = ({anecdote}) => <p>{anecdote}</p>
const Votes = ({votes}) => <p>has {votes} votes</p>

  
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)) 
  
  const randAnecdote = () => {
    const num = Math.floor(Math.random() * anecdotes.length)
    setSelected(num)
  }

  const updateVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const mostVotes = Math.max(...votes)
  const topAnecdote = anecdotes[votes.indexOf(mostVotes)]
  
  return (
    <div>
      <Header header="Anecdote"/>
      <Anecdote anecdote={anecdotes[selected]}/>
      <Button handleClick={randAnecdote} text="New Anecdote"/>
      <Button handleClick={updateVotes} text="Vote"/>
      <Votes votes={votes[selected]}/>
      <Header header="Top Anecdote"/>
      <Anecdote anecdote={topAnecdote}/>
    </div>
  )
}

export default App
