'use client'
import React from 'react'
import WhiteButton from '../button/WhiteButton';

type Props = {
    order_work:string
}

const ButtonOrderAdvance = (props: Props) => {
  function scrollToForm() {
    const element = document.getElementById('cost-calculation');

    element?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className={'button-wrapper'}>
        <WhiteButton text={props.order_work} onClick={scrollToForm}/>
    </div>
  )
}

export default ButtonOrderAdvance