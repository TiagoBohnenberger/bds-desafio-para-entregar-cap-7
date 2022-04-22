import { ReactComponent as MainImage } from 'assets/images/car-header-1.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card bg-primary">
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <h5>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </h5>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
      <div className="home-footer">
        <Link to="/products">
          <ButtonIcon />
        </Link>
        <h5>Comece agora a navegar</h5>
      </div>
    </div>
  );
};

export default Home;
