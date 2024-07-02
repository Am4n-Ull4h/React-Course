import React,{useState} from "react";

function FormValidation() {
    let [inp,setInp] = useState("")
    let [trns,setTrns] = useState("")
    let [chk,setChk] = useState("")
    function submit(e){
            e.preventDefault();
    }
    
        function inpp(e){
            setInp(e.target.value)
            if(e.target.value.length <8){
                document.getElementById("inp").style.border = "2px solid red"
            }else{
                document.getElementById("inp").style.border = "2px solid black"
    
            }
            
        }

        function trnss(e){
            setTrns(e.target.value)
        }


        function chkk(e){
            setChk(e.target.checked)
        }
    
    function sbmt(){
        console.log(inp,chk,trns)

        

    }
  return (
    <div>
      <form action="" className="col-4 mx-auto mt-5" onSubmit={submit}>
        <input type="text" name="" className="" id="inp" value={inp} style={{border:"none",outline:"none"}} onChange={inpp} />
        <br />
        <br />
        <select name="" id="" className="px-5" value={trns} onChange={trnss}>
          <option value="Pak">Pak</option>
          <option value="Ind">Ind</option>
          <option value="Nz">Nz</option>
        </select>
        <br />
        <br />
        <input type="checkbox" name="" id="" value={chk} onChange={chkk}/>
        <span>Term & Conditions</span>
        <br /><br />

        <button type="submit" className="col-4" onClick={sbmt}>Click</button>
      </form>
    </div>
  );
}

export default FormValidation;
