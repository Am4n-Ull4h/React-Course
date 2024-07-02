import React,{useState} from 'react'

function Click() {
    let [state,setState] = useState("")
    let [trans,setTrans] = useState(false)


    let value = "Welcome to my web" // This wil not work in React


    function clickMe(){
        setState("Dear")
        value = "Welcome change"    // in console it will change but in DOM It will not change
        console.log(value)      




        setTrans(!trans)
        
    }
  return (
    <React.Fragment>
        <div className="col-4 mx-auto">
        <h1>Hellooo {state}</h1>
        {
          trans && <p className='trr'>{value}</p>
        }
        <button onClick={clickMe}>Click Me</button>
        </div>
        
    </React.Fragment>
  )
}

export default Click