'use client'
import { Locale } from '@/i18n.config'
import { MenuItem, TextField } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useEffect, useState } from 'react'

function findKeyByValue(obj:any, value:string) {
    for (const key in obj) {
      if (obj[key] === value) {
        return key;
      }
    }
    return null;
}

const SelectReviews = ({subjects,reviews,lang,subject,typesOfWorkOptions}:{subjects:any,reviews:any,lang:Locale,typesOfWorkOptions:Array<string>,subject:string}) => {
    const router=useRouter();
    const [typesOptions, setTypesOptions] = useState([
        lang == "ua" ? "Усі" : "Все",
        ...typesOfWorkOptions,
    ]);
    const [value,setValue]=useState("");
    
    useEffect(()=>{
        setValue(subject)
    },[value,subject]);
    function handleTypeOfWorkChange(e: ChangeEvent<HTMLInputElement>) {
        if(e.target.value==="All"||e.target.value==="Усі"){
            router.push(`/${lang}/reviews/all/1`);
            return;         
        }
        let selectingSybject=findKeyByValue(subjects,e.target.value)?.toLowerCase();
        router.push(`/${lang}/reviews/${selectingSybject}/1`);
    }
  return (
    value?
    <TextField
        fullWidth
        id="type_work"
        select
        label={reviews.type_work}
        defaultValue={lang === "ua" ? "Усі" : "All"}
        InputLabelProps={{
        style: {
            fontSize: "1.1rem",
            fontWeight:'900',
        },
        }}
        onChange={handleTypeOfWorkChange}
        variant="standard"
        value={value}
        InputProps={{
        sx: { borderBottom: "2px solid white" },
        disableUnderline: true,
        }}
    >
        {typesOptions.map((typeOfWork2, index) => (
            <MenuItem key={index} value={typeOfWork2}>
                {typeOfWork2}
            </MenuItem>
        ))}
    </TextField>:<></>
  )
}

export default SelectReviews