import React, {useState} from 'react';
export default function Counter(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <h1 className="" style={{fontFamily:"serif"}}> Buy Tea - Hari Tea</h1>
            <hr/>
            <h2>Grab your Cup of Tea!</h2>
            <h2>Tea Packets:{count}</h2>
            <button  className='btn btn-secondary btn-lg active' onClick={()=>count >0?setCount(count-1):setCount(0)}>-</button>

            <button className='btn btn-primary btn-lg active' onClick={()=>setCount(count+1)}>+</button>
            <br></br>

            <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Buy</a>
        </div>
    )
}