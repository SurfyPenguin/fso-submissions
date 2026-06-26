const Total = ({ parts }) => {
  const total = parts.reduce((accum, curr) => accum + curr.exercises, 0)
  return (
    <b>total of {total} exercises</b>
  )
}

export default Total