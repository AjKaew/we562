import {useContext} from 'react';
import { DataContext } from '../main';

function InnerComp() {
  const data = useContext(DataContext);
  return (
    <ul>
      {data.map(item => <li key={item.id}>{item.val}</li>)}
    </ul>
  );
}

export default InnerComp;