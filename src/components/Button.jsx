import "../styles/button.css"
const Button = ( {onclick}) => {
  return (
    <div className="container">
      <a href="#" className="button type--A">
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">Registro</span>
      </a>
    </div>
  );
};

export default Button;
