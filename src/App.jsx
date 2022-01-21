import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Links from './Links';
import Weather from './Weather';

function App() {
  const [count, setCount] = useState(0);
  const [mylinks, setLinks ] = useState([
    {url:"https://reactjs.org", text:"Learn react"},
    {url:"https://vitejs.dev/guide/features.html", text:"Vite Docs"},
    {url:"https://stackblitz.com/", text:"StackBlitz"},
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Let's call the Weather ApiGateway (Lambda + DynamoDB) ...
        </p>
        <Weather />
        <Links links={mylinks} />
      </header>
    </div>
  );
}

export default App;
