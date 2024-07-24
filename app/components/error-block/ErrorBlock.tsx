'use client'
import { FieldError } from 'react-hook-form';
import './ErrorBlock.scss';

interface ErrrorBlockProps {
  error: FieldError | undefined;
}
export default function ErrorBlock({ error }: ErrrorBlockProps) {
  if (!error) return null;
  return <div className="error-block">{error?.message}</div>;
}
