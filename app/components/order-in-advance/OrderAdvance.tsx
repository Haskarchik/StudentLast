import React from 'react';
import WhiteButton from '../button/WhiteButton';
import './OrderAdvence.scss';
import clsx from 'clsx';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import ButtonOrderAdvance from './ButtonOrderAdvance';

interface OrderAdvanceProps {
  className?: string;
  lang:Locale
}

const OrderAdvance =async ({ className, lang }: OrderAdvanceProps) => {
  const {AboutUs}=await getDictionary(lang);
 
  
  return (
    <div className={clsx('OrderAdvance-wrapper', className)}>
      <span className="span-sub-article span-title">
        {AboutUs.order_work} <br /> {AboutUs.advance}
      </span>
      <div className="order-items">
        <span className="order-item-span">
          <p>
            {AboutUs.advance_description}
          </p>
        </span>
        <ButtonOrderAdvance order_work={AboutUs.order_work}/>
      </div>
    </div>
  );
};

export default OrderAdvance;
