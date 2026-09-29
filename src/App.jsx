const App = () => {
  const course = 'CSIT340 - Web Development'

  const part1 = 'Web Development Fundamentals'
  const exercises1 = 3

  const part2 = 'Object-Oriented Programming'
  const exercises2 = 3

  const part3 = 'Database Management Systems'
  const exercises3 = 3

  return (
    <div>
      <h1>{course}</h1>

      <p>
        {part1} {exercises1}
      </p>

      <p>
        {part2} {exercises2}
      </p>

      <p>
        {part3} {exercises3}
      </p>

      <p>
        Number of exercises {exercises1 + exercises2 + exercises3}
      </p>
    </div>
  )
}

export default App