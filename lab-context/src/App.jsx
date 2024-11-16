import React from 'react'
import MyComp1 from './components/MyComponents';

function App(props) {
  return (
    <MyComp1 data={props.data} />
  );
}

export default App;
