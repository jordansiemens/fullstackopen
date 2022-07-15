const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts ={course.parts} />
    </div>
  )
}
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = ({part,exercise}) => {
  return (
    <p> {part} {exercise}</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <ul>
        {parts.map(part =>
          <li key={part.id}>
            <Part part ={part.name} exercise={part.exercises}/>
          </li>
        )}
    </ul>
    </div>
  )
}

const Total = (props) => {
  return (
    <p> Number of exercices: {props.exercises}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1, 
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id:2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id:3
      }
    ] 
  }

  return (
    <Course course={course}/>
  )
}
export default App
