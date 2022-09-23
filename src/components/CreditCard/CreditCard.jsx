import './CreditCard.css';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
    children,
  } = props;

  const divStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div style={divStyle} className="P-creditCard">
      <p className="Type">{type}</p>
      <div className='Rest'>
        <p>{number}</p>
        <p>Expires  {expirationMonth}/{expirationYear}</p>
        <p>{bank}      {owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
