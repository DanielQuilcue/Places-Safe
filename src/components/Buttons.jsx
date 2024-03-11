const Buttons = ({ type, onClickLogic }) => {
  const handleClick = () => {
    if (onClickLogic) {
      onClickLogic();
    }
  };
  return (
    <>
      {type === "ver" && (
        <a
          className="group relative inline-block focus:outline-none focus:ring"
          onClick={handleClick}
        >
          <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

          <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
            Ver
          </span>
        </a>
      )}

      {type === "input" && (
        <a
          className="group relative inline-block focus:outline-none focus:ring"
          onClick={handleClick}
        >
          <span className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

          <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
            Download
          </span>
        </a>
      )}
    </>
  );
};

export default Buttons;
