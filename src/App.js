import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCards/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';

function App(props) {
  return (
    <div>
      <h2>Iteración 1 _______________________________________</h2>
      <div className="App">
        <IdCard />
      </div>
      <div>
        <h2>Iteración 2 _______________________________________</h2>
        <Greetings lang="es">
          <p> sr. Patata</p>
        </Greetings>
        <Greetings lang="fr">
          <p> sr. Patata</p>
        </Greetings>
        <Greetings lang="de">
          <p> sr. Patata</p>
        </Greetings>
        <Greetings lang="en">
          <p> sr. Patata</p>
        </Greetings>
      </div>
      <div>
        <h2>Iteración 3 _______________________________________</h2>
        <Random min={2} max={26} />
        <Random min={1} max={99} />
        <Random min={1} max={49} />
        <Random min={35} max={98} />
      </div>
      <div>
        <h2>Iteración 4 _______________________________________</h2>
        <BoxColor r={34} g={0} b={248} />
        <BoxColor r={200} g={15} b={98} />
        <BoxColor r={188} g={249} b={2} />
      </div>
      <div>
        <h2>Iteración 5 _______________________________________</h2>
        <div className="CreditCard">
          <CreditCard 
              bgColor='#11aa99' 
              color='white' 
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
            />
          <CreditCard
              bgColor='#eeeeee' 
              color='#222222' 
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
            />
            <CreditCard
              bgColor='#ddbb55' 
              color='white' 
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bank="Name of the Bank"
              owner="Firstname Lastname"
            />
        </div>
      </div>
      <h2>Iteración 6 _______________________________________</h2>
      <div></div>
    </div>
  );
}

export default App;
