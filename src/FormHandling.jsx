import { useState } from "react"

function FormHandling(){

    const[name,setname]=useState("");

    function handleChange(e){
        setname=e.target.value;
        console.log(name);
    }
 
 

    return(
        <>
            <input type="text" placeholder="enter you name: " onChange={handleChange} value={name}></input>
            <button onClick={handleName}> Change Name</button>
        </>
        
        
    )
}

export default FormHandling