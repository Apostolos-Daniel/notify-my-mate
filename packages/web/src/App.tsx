import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("Hi 👋");

  function onClick() {
    fetch(import.meta.env.VITE_APP_API_URL)
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // add this line to log the data to the console
        setMessage(data);
      });
  }

  return (
    <div className="App">
      <div className="card">
        <button onClick={onClick}>
          Message is "<i>{message}</i>"
        </button>
      </div>
    </div>
  );
}

export default App
