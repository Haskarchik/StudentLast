import { Button, Input } from '@mui/material'
import React, { useState } from 'react'

const Authorize = () => {
    const [key,setKey]=useState("");
    const setAuthorize=()=>{
        localStorage.setItem("KEY",key);
        window.location.reload()
    }
  return (
    <div>
        <Input style={{marginTop:"45px"}} value={key} onChange={(e)=>setKey(e.target.value)}/>
        <br/>
        <br/>
        <Button onClick={setAuthorize}>авторизуватися</Button>
    </div>
  )
}

export default Authorize