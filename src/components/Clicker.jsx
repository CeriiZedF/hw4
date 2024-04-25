import React, { useState } from 'react'

function Clicker() {
    const [count, setCount] = useState(0);

    const arrNumberAdd = [
        -10,
        -15,
        -25,
        -50,
        50,
        25,
        15,
        10
    ]

    function countLogic(e){
        setCount(count => count + Number(e.target.value))
    }

    return (
        <>
        <p>{count}</p>
            {/* {
             arrNumberAdd.forEach((element) => 
                // <button className='btn btn-dark' onClick={() => {setCount(count => count + element)}}>+{element}</button>
                
                
            )} */}

        {arrNumberAdd.map((item) => (
            <button type="btn btn-dark" onClick={countLogic} value={item}>{item}</button>
            
            ))
            }
                    
            
        </>
    )
}

export default Clicker
