import { Locale } from '@/i18n.config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./MiniBlog.scss"
import { FaRegEye } from "react-icons/fa";
import { getDictionary } from '@/lib/dictionary'


type Props = {
    blogs:{id:number,
        name:string,
        description:string,
        img:string,
        views:number,
        countTimeRead:number
      }[
    ],
    lang:Locale,
    isThree:1|0
}

const MiniBlog = async({blogs,lang,isThree=1}:Props) => {
  const {blog}=await getDictionary(lang)
  return (
    <div className={`list-blog${isThree}`}>
        {blogs.map((x)=>(
          <Link key={x.id} href={`/${lang}/selectblog/${x.id}`}>
            <div className="blog">
              <div className="img">
                <Image className="img" objectFit="cover" src={process.env.NEXT_PUBLIC_SERVER+x.img} width={900} height={600} alt="page"/> 
              </div>
              <div className="text">
                <div className="title">
                  <h1>{x.name}</h1>
                </div>
                <div className="description">
                  {x.description}
                </div>
              </div>
              <div className="views-with-time">
                <div className="views">
                  <FaRegEye />&nbsp;{x.views}
                </div>
                <div className="time">
                  {x.countTimeRead}{blog.minutes}
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default MiniBlog
