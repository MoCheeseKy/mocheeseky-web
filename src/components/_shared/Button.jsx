const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 text-[12px] font-medium bg-dark text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] border border-white flex items-center gap-4 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
