import { useState } from "react";
import data from "./data"

const App = () => {
  const [cuantos,setCuantos]=useState(1)
  const [parrafos,setParrafos]=useState([])
  
  

  const handleSubmit=(e)=>{
    e.preventDefault()
    const newData=data.slice(0,cuantos)
    setParrafos(newData)
  }

  return (
    <main>
     
      <h2>tired of boring lorem ipsum?</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="amount" className="form-label">Paragraps: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          value={cuantos}
          onChange={(e)=>setCuantos(parseInt(e.target.value))}
          className="form-input"
        ></input>
        <button type='submit' className="btn">
          generate
        </button>
      </form>
     
      <article className="parrafos">
       {parrafos.map((item)=>{
        return(
          <p>{item}</p>
        )
       })}
      </article>
    </main>
  ) 
};
export default App;
