import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './features/counter/counterSlice'

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="container">
      <h1>Redux Toolkit + Vite</h1>
      <div className="card">
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Current Count</p>
        <div className="counter-value">{count}</div>
        <div className="button-group">
          <button
            onClick={() => dispatch(decrement())}
            aria-label="Decrement"
          >
            −
          </button>
          <button
            onClick={() => dispatch(increment())}
            aria-label="Increment"
          >
            +
          </button>
        </div>
      </div>
      <p style={{ marginTop: '2rem', color: '#64748b' }}>
        Edit <code>src/App.jsx</code> to test HMR
      </p>
    </div>
  )
}

export default App