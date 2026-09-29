const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 - Web Development',
    parts: [
      {
        name: 'IT317 - Project Management',
        exercises: 3
      },
      {
        name: 'IT365 - Data Analytics',
        exercises: 3
      },
      {
        name: 'CSIT327 - Information Management',
        exercises: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App