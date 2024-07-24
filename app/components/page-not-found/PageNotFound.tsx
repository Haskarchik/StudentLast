import Image from 'next/image'
import React from 'react'
import "./PageNotFound.scss";

const PageNotFound = ({notFound}:{notFound:string}) => {
  return (
    <div className='not-found'>
        <Image src="/review-photos/not-found.png" color='black' width={50} height={50} alt="not-found"/>
        <p>{notFound}</p>
    </div>
  )
}

export default PageNotFound