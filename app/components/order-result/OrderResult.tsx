import React from 'react';
import './OrderResult.scss';
interface OrderResultProps {
  label?: string;
}

const OrderResult: React.FC<OrderResultProps> = ({ label }) => {
  return (
    <></> // This here is because the client is not sure about this component
  );
};

export default OrderResult;
