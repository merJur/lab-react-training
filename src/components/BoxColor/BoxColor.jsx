import './BoxColor.css';
import '../Random/Random';

const BoxColor = (props) => {
  const { r, g, b } = props;

  let divStyle = {
    backgroundColor: `rgb( ${r}, ${g}, ${b})`,
    width: '20rem',
    height: '8rem',
    border: '1px solid black',
    marginLeft: '3rem',
    marginBottom: '1rem',
  };

  return (
    <div style={divStyle}>
      <p className="P-BoxColor">{`rgb( ${r}, ${g}, ${b})`}</p>
    </div>
  );
};

export default BoxColor;
