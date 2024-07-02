import React,{useState} from 'react'

function Condition() {
    let [show,setShow] = useState("Show")
    let [tr,setTr] = useState(false)
   
    function showw(){
        
        if (tr) {
            setShow("Hide");
            setTr(!tr);
          } else {
            setShow("Show");
            setTr(!tr);

          }
        
    }
  return (
    <>
    {
        tr?<h1 className='btnn'>This is the Heading</h1>:null
    }
    <button onClick={showw} className='btn'>{show}</button>
    </>
  )
}

export default Condition