import { useState } from 'react';

function Add(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="addcontainer">
      <h5>{props.text}</h5>
      <div className="addbtn">
        <button className="close-btn" onClick={()=>setCount(count+1)}>
          <img src="\images\plus.svg" alt="image3" />
        </button>
        <h5 className="add-number"> {count} </h5>
        <button className="close-btn" onClick={()=>setCount(count-1)}>
          <img src="\images\Minus.svg" alt="image3" />
        </button>
      </div>
    </div>
  );
}

export default Add;
