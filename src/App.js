import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, world!</h1>
        <p>Clicked {count} times.</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
