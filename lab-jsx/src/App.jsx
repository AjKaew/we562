import {useState, useEffect, useRef} from 'react';

function App(props) {
  // const [count, setCount] = useState(0);
  let count = useRef(0);
  const [time, setTime] = useState(new Date);

  function greeting() {
    if (time.getHours() < 12) {
        return 'Good morning';
    }
    else if (time.getHours() <= 18) {
        return 'Good afternoon';
    }
    else {
        return 'Good evening';
    }
  }

  function handleClick() {
    console.log((new Date).toLocaleString());
    count.current = count.current+1;
    console.log(count);
    // setCount(count + 1);
  }

  useEffect(()=>{
    const id = setInterval(()=>setTime(new Date), 1000);
    return ()=>clearInterval(id);
  }, []);
  

  return (
    <div>
        <h1>{time.toLocaleTimeString()}</h1>
        <p>{greeting()}, <b>{props.name}</b></p>
        <button onClick={handleClick}>Refresh: {count.current}</button>
        {/* <button onClick={()=>setTime(new Date)}>
          Greeting
        </button> */}
    </div>
  );
}

export default App;