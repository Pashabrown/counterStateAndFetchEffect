import * as React from "react";
import './App.css';
import axios from "axios";

const {useEffect, useState} = React;


// Make a request for a user with a given ID
const fetchRandomData = ()=> {
  return axios.get('https://randomuser.me/api')
  .then(({data}) => {
    // handle success
    console.log(data);
    return JSON.stringify(data);
  })
  .catch(err => {
    // handle error
    console.error(err);
  });
  
}

function App() {
  const [counter, setCounter] = useState(0);
  const [randomUserDataJson, setRandomUserDataJson] = useState("");
  
  useEffect(() => {
    fetchRandomData().then(randomData => {
      setRandomUserDataJson(randomData || "No User Data");
    });
  }, []);
  
  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>
        {counter}
      </p>
      <button onClick={() => {
        setCounter(counter + 1);

      }}>increase counter
      </button>
      <p>
        {randomUserDataJson}
      </p>
      

      

    </div>
  );
}

export default App;
