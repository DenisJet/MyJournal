import './CardButton.css';
import cn from 'classnames';

export default function CardButton({ children, className, isActive, ...props }) {
  const cl = 'card-button' + (className ? ' ' + className : '');

  return (
    <button
      {...props}
      className={cn(cl, {
        ['active']: isActive,
      })}
    >
      {children}
    </button>
  );
}
