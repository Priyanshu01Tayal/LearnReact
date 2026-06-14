import {useState} from 'react'
function Sta()
{
    const [count,setCount]=useState(0)
    function inc()
    {
        setCount(count+1)
    }
return (
    <>
    <h2>Count:{count}</h2>
    <button onClick={inc}>Increment</button>
    </>
)
}
export default Sta;