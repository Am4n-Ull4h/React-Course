import React,{useState} from 'react'


export default function InputValue() {
    let [state,setState] = useState()
    let [printt,setPrintt] = useState()
    function change(e){
        setState(e.target.value)
    }

    function setPrint(){
        setPrintt(!printt)
    }
  return (
    <>


    {
        printt?<h1>{state}</h1>:null
    }
    <input type="text" name="" id=""onChange={change} />
    <button onClick={setPrint}>Click</button>
    
    </>
  )
}
