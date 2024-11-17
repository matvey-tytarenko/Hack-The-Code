import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="text-5xl font-bold top-0 left-0 p-10">Hack The Code</h1>
      <form className="flex flex-col">
        <div className="create p-11 flex flex-col">
          <button type="submit" className="text-3xl hover: via-violet-700" onClick={() => navigate('/')}>
            Create Room
          </button>
          <h1 className='text-5xl pt-3'>or</h1>
          <div className="join flex flex-col pt-5">
            <button type="submit" className="text-3xl hover: via-violet-700">
              Join Room
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home