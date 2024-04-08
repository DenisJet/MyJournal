import { forwardRef } from 'react';
import './Input.css';
import cn from 'classnames';

export default forwardRef(function Input({ className, isValid = true, appearance, ...props }, ref) {
  return (
    <input
      {...props}
      ref={ref}
      className={cn(className, 'input', {
        ['invalid']: !isValid,
        ['input-title']: appearance === 'title',
      })}
    />
  );
});
