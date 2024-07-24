import Link from 'next/link';
import './NavigateButton.scss';

interface NavigateButtonProps {
  content: string;
  to: string;
}

export default function NavigateButton({ content, to }: NavigateButtonProps) {
  return (
    <Link className={'button-style'} href={to}>
      {content}
    </Link>
  );
}
