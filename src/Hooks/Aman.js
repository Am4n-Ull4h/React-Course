import React,{useState} from 'react'
import User1 from './User1'

function Aman() {
    let [count,setCount] = useState(0)
    let [data,setData] = useState(0)
  return (
    <>
      <User1  count={count}  data={data}/>
      <button onClick={()=>{setCount(count+1)}}>click</button>
      <button onClick={()=>{setData(data+1)}}>click</button>
    </>
  )
}

export default Aman
