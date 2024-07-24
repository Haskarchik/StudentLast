'use client'
import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DeleteBlog = () => {
    const [selectId,setSelectId]=useState("0");
    const [listBlog,setListBlog]=useState<any>([]);
    useEffect(()=>{
        getListBlog();
    },[]);
    const getListBlog=async()=>{
        const res=await axios.get(process.env.NEXT_PUBLIC_SERVER_ADMIN+"blog/getPosts");
        if(res.data.status==200){
            setListBlog(res.data.res);
            if(res.data.res.length>0)chooseSelectId(res.data.res[0].id)
        }
    }
    const chooseSelectId=(id:string)=>{
        setSelectId(id);
    }
    const Delete=async()=>{
        try{
            const token = localStorage.getItem("KEY");
            const res = await axios.post(process.env.NEXT_PUBLIC_SERVER_ADMIN + "blog/del", { id:selectId }, {
                headers: {
                    KEY: `${token}`,
                }
            });
            if(res.data.status==200)alert("ok")
            else alert("error");
        }catch(err){
            alert("error");
        }
    }  
    return (
    <div>
        <h1>видалити статтю</h1>
        <select onChange={(e)=>chooseSelectId(e.target.value)}>
            {listBlog.map((x:{id:string})=>(
                <option key={x.id} value={x.id}>
                    {x.id}
                </option>
            ))}
        </select>
        <Button onClick={Delete} style={{display:'flex',justifyContent:"end",width:"100%", fontSize:"30px",color:"red"}}>delete</Button>
    </div>
  )
}

export default DeleteBlog;
