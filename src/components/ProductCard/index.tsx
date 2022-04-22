import './styles.css';

import { ReactComponent as CarCardImg } from 'assets/images/car-card-1.svg';
import BuyButton from 'components/BuyButton';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <CarCardImg />
      </div>
      <div className="card-bottom-container">
        <h5>Audi Supra TT</h5>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </h6>
        <BuyButton />
      </div>
    </div>
  );
};

export default ProductCard;
