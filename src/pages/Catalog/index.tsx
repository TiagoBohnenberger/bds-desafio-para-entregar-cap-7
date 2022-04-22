import ProductCard from 'components/ProductCard';

import './styles.css';

const Catalog = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-12 col-xl-12">
            <div className="search-container">
              <div className='search-group'>
                <input
                  type="text"
                  className="input-group-text"
                  placeholder="Digite sua busca"
                />
                <button className="btn btn-primary">
                  <h6>BUSCAR</h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
