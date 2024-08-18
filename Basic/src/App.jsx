
import './App.css'


function App({name1, price1, model }) {
 

  return (
    <>
    <div className="container">
      <h1>{name1}</h1>
      <p>{price1}</p>
      {price1>35000?<p>Discount of 5%</p>: null}
      {model}
    </div>
    </>
  )
}

export default App
