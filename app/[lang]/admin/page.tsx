'use client'
import React, { useEffect, useState } from 'react'
import { Editor } from "@tinymce/tinymce-react";
import { Button } from '@mui/material';
import axios from "axios";
import { Metadata } from 'next';
import DeleteBlog from './DeleteBlog';
import Authorize from './Authorize';
import EditArticle from './EditArticle';

const metadata:Metadata={
    robots: 'noindex, nofollow',
}

const page = () => {
    const [name1,setName1]=useState<string>("");//ukrainian
    const [name2,setName2]=useState<string>("");//english
    const [description1,setdescription1]=useState<string>("");
    const [description2,setdescription2]=useState<string>("");
    const [image, setImage] = useState<File | any>(null);
    const [countMinRead,setCountMinRead]=useState<any>(0);

    const Add=async()=>{
        const formData = new FormData();
        formData.append("name1", name1);
        formData.append("name2", name2);
        formData.append("description1", description1);
        formData.append("description2", description2);
        formData.append("image", image);
        formData.append("countTimeRead",countMinRead);
        
        try {
            const token = localStorage.getItem("KEY");
            const res = await axios.post(process.env.NEXT_PUBLIC_SERVER_ADMIN + "blog/add", formData, {
                headers: {
                KEY: `${token}`, 
                },
            });

        if (res.status === 200) {
            alert("Успішно додано");
        } else {
            alert("Помилка");
        }
        } catch (err) {
        alert("Помилка");
        }
    }
    const [isAuthorize,setIsAuthorize]=useState(true);
    useEffect(()=>{
        console.log(localStorage.getItem("KEY"))
        if(localStorage.getItem("KEY")!==null)setIsAuthorize(true);
        else setIsAuthorize(false)
    },[])
  return (
    isAuthorize?
    <div>
        <h1>добавити блог</h1>
        <p>назва українською</p>
        <input maxLength={50} style={{width:"350px"}} type='text' value={name1} onChange={(e)=>setName1(e.target.value)}/>
        <p>назва англійською</p>
        <input maxLength={50} style={{width:"350px"}} type='text' value={name2} onChange={(e)=>setName2(e.target.value)}/>
        <p>фотографія</p>
        <input
            type="file"
            onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                setImage(selectedFile);
            }}
        />
        <p>скільки хвилин читати</p>
        <input type='number' value={countMinRead} onChange={(e)=>setCountMinRead(e.target.value)}/>
        <p>опис українською</p>
        <Editor
            value={description1}
            apiKey="t6okxmezjfhajn8bk23u3dkejv0oc9c1qhs7gmmh9qskcfdp"
            onEditorChange={(newText:string) => setdescription1(newText)}
        />
        <p>опис англійською</p>
        <Editor
            value={description2}
            apiKey="t6okxmezjfhajn8bk23u3dkejv0oc9c1qhs7gmmh9qskcfdp"
            onEditorChange={(newText:string) => setdescription2(newText)}
        />
        <br/>
        <br/>
        <Button style={{display:'flex',justifyContent:"end",width:"100%", fontSize:"30px"}} onClick={Add}>Добавити</Button>
        <EditArticle/>
        <Button style={{display:'flex',justifyContent:"end",width:"100%", fontSize:"30px",marginTop:"50px"}} onClick={()=>{localStorage.removeItem("KEY");window.location.reload()}}>авторизуватися</Button>
    </div>:<><Authorize /></>
  )
}

export default page
