import pokeball from './assets/pokeball.gif'

function Spinner() {
  return (
    <div>
      <img
        src={pokeball}
        alt="Loading..."
        className="mx-auto"
      />
    </div>
  )
}
export default Spinner
