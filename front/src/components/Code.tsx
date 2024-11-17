import React from 'react'

function Code() {
  return (
    <div className="container">
      <h1 className="text-5xl font-bold top-0 left-0 p-10">Hack The Code</h1>
      <form>
        <div className="code">
          <input
            type="text"
            placeholder="Enter The Code"
            className="text-center outline-none"
            style={{
              "font-size": "25px",
            }}
          />
        </div>
        <div className="submit p-11">
          <button type="submit" className="text-3xl hover: via-violet-700">
            Join Room
          </button>
        </div>
      </form>
    </div>
  );
}

export default Code