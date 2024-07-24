import Link from 'next/link';
import './WhiteNavigateButton.scss';
import React from 'react';

interface WhiteNavigateButtonProps {
  content: string;
  to: string;
}

export default function WhiteNavigateButton({ content, to }: WhiteNavigateButtonProps) {
  return (
    <Link className="navigate-white-button-style" href={to}>
      <span>{content}</span>
    </Link>
  );
}
