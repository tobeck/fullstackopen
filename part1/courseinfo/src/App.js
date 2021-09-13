import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <p>{props.part}</p>
  )
}

const TotalExercises = (props) => {
  const TotalExercises = props.exercises.reduce(
    (previousScore, currentScore, index) => previousScore + currentScore, 
    0);
  return (
    <p>{TotalExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part={part1.name} />
      <Content part={part2.name} />
      <Content part={part3.name} />
      <TotalExercises exercises={[part1.exercises, part2.exercises, part3.exercises]} />
    </div>
  )
}

export default App