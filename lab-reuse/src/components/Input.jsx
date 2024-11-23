import { useState } from "react";

function Input({type="text", action, style}) {
  const [value, setValue] = useState('');
  return (<input type={type} value={value} 
    onChange={(e)=>{
      setValue(e.target.value);
      action(value);
    }}
    style={{display: 'block', padding:"20px", 
      backgroundColor:'cyan', ...style}} />);
}

export default Input;