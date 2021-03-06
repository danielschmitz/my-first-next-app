import React, { useEffect } from 'react';
import  Foo from './foo'

const Counter = (props) => {
  const [count,setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  function addOne() {
    setCount(count+1)
    console.log(count);
  }

  return (
    <div>
      <b>Count: {count}</b>
      <br />
      <br />
      <button onClick={addOne}>Add One</button>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Foo />
    </div>
  );
}
