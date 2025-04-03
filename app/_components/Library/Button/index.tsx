const Button = ({
  children,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={`${!props.disabled ? 'cursor-pointer' : ''} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
