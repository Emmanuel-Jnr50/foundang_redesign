const Button = ({ children, icon, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2.5 bg-white text-purple py-4.5 px-6 rounded-2xl font-poppins font-medium text-[18px] transition-all duration-300 hover:shadow-hover hover:-translate-y-0.5 ${className}`}
    >
      {icon && <img src={icon} alt="" />}
      {children}
    </button>
  );
};

export default Button;
