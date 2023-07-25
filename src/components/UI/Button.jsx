const Button = ({ modifier, clickHandler, children }) => {
  const buttonClasses = `button ${modifier}`;

  return (
    <button className={buttonClasses} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
