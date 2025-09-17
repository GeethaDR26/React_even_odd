export default function App() {
  var num = 11
  return (
    <>
  <h2>{num} is {num % 2 == 0 ? 'Is even' : 'Is odd'}</h2>
    </>
  )
}