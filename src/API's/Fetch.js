import React, { useEffect, useState } from 'react'

function Fetch() {
    let [state,setState] = useState([])



    useEffect(()=>{
        fetch('https://catfact.ninja/breeds').then((res)=>{
        res.json().then((rzlt)=>{
            let data = rzlt

            setState(data.data)
        })
    })
    },[])
  return (
    <>
    <h1 className='text-center'>API's Data</h1>
    <div className="col-8 mx-auto">
    <table className='table'>
        <thead>
            <tr>
                <th>Sr. No</th>
                <th>Breed</th>
                <th>Country</th>
                <th>Origin</th>
                <th>Coat</th>
                <th>Pattern</th>

            </tr>
        </thead>
        <tbody>
            {
                state.map((item,i)=>{
                    return(
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{item.breed}</td>
                                <td>{item.country}</td>
                                <td>{item.origin}</td>
                                <td>{item.coat}</td>
                                <td>{item.pattern}</td>
                            </tr>
                    )
                })
            }
        </tbody>
    </table>
    </div>
        
    </>
  )
}

export default Fetch