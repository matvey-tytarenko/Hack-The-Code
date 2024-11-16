import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-5xl font-bold top-0 left-0 p-10">Hack The Code</h1>
        <form>
          <div className="name">
            <input
              type="text"
              placeholder="Input your username"
              className="text-center"
              style={{
                "font-size": "25px",
              }}
            />
          </div>
          <div className="submit p-11">
            <button type="submit" className='text-3xl hover: via-violet-700'>Play</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App
