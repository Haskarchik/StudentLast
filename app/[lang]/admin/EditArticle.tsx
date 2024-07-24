import { Button } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EditArticle = () => {
    const [name1,setName1]=useState<string>("");//ukrainian
    const [name2,setName2]=useState<string>("");//english
    const [description1,setdescription1]=useState<string>("");
    const [description2,setdescription2]=useState<string>("");
    const [countMinRead,setCountMinRead]=useState<any>(0);
    const [listBlog,setListBlog]=useState<any>([]);
    const [selectId,setSelectId]=useState("0");
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

    const chooseSelectId=async(id:string)=>{
        try{
            setSelectId(id)
            const res=await axios.get(process.env.NEXT_PUBLIC_SERVER_ADMIN + "blog/getFull?id="+id);
            if(res.data.status==200){
                const article=res.data.res;
                setName1(article.name1);
                setName2(article.name2);
                setdescription1(article.description1);
                setdescription2(article.description2);
                setCountMinRead(article.countTimeRead);
            }else alert("error");
        }catch(err){
            alert("error");
        }
    }
    useEffect(()=>{
        if(listBlog.length>0)chooseSelectId(listBlog.id);
    },[])
    const Edit=async()=>{
        const formData = new FormData();
        formData.append("id", selectId);
        formData.append("name1", name1);
        formData.append("name2", name2);
        formData.append("description1", description1);
        formData.append("description2", description2);
        formData.append("countTimeRead",countMinRead);
        
        try {
            const token = localStorage.getItem("KEY");
            const res = await axios.post(process.env.NEXT_PUBLIC_SERVER_ADMIN + "blog/edit", formData, {
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
  return (
    <div>
        <h1>редагувати статтю</h1>
        <select onChange={(e)=>chooseSelectId(e.target.value)}>
            {listBlog.map((x:{id:string})=>(
                <option key={x.id} value={x.id}>
                    {x.id}
                </option>    
            ))}
        </select>
        <p>назва українською</p>
        <input maxLength={50} style={{width:"350px"}} type='text' value={name1} onChange={(e)=>setName1(e.target.value)}/>
        <p>назва англійською</p>
        <input maxLength={50} style={{width:"350px"}} type='text' value={name2} onChange={(e)=>setName2(e.target.value)}/>
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
        <Button style={{display:'flex',justifyContent:"end",width:"100%", fontSize:"30px"}} onClick={Edit}>редагувати</Button>

    </div>
  )
}

export default EditArticle;
