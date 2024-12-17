import Link from "next/link";
import Data from "@data/sliders/products.json";
import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";

const ProductGrid = () => {
  return (
    <Layouts contactButton>
      <PageBanner pageTitle={"Specialized Tools & Equipments"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* Shop Style One Start */}
      <section className="gap shop-style-one addition">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop-filter">
                <p>{Data.items.length} Machinery We Work With</p>
                <div className="gird-list d-flex-all">
                  {/* <Link className="d-flex-all list" href="/product-list">
                    <i className="fa-solid fa-list" />
                  </Link> */}
                  <Link className="d-flex-all grid" href="/product-grid">
                    <i className="fa-solid fa-table-list" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row p-slider align-items-center justify-content-between grid">
            {Data.items.map((item, key) => (
              <div key={`product-${key}`} className="col-lg-4" >
                <div className="product">
                  <div className="main-data">
                    <div className="btn-hover">
                      <figure>
                        <img src={item.image} alt={item.title} />
                      </figure>
                      {/* <Link href="/cart" className="theme-btn">Add to Cart <i className="fa-solid fa-bag-shopping" /></Link> */}
                    </div>
                    <div className="data">
                      <div className="ratings">
                        <i className="fa-solid fa-star"></i>
                        <span>{item.rating}</span>
                      </div>
                      {/* <h3><Link href="/product-detail">{item.title}</Link></h3> */}
                      <h3>{item.title}</h3>
                      {/* <div className="price-range">
                        <span>$18.60</span> - <span>$58.50</span>
                      </div> */}
                    </div>
                  </div>
                  {/* <Link href="/cart" className="theme-btn">Add to Cart <i className="fa-solid fa-bag-shopping" /></Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container" >
          <div className="row">
            <div className="builty-pagination">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#."><i className='fa-solid fa-arrow-left-long' /></a></li>
                  <li className="page-item"><a className="page-link" href="#.">01</a></li>
                  <li className="page-item"><a className="page-link" href="#.">02</a></li>
                  <li className="page-item"><a className="page-link" href="#.">03</a></li>
                  <li className="page-item space"><a className="page-link" href="#.">..........</a></li>
                  <li className="page-item"><a className="page-link" href="#.">08</a></li>
                  <li className="page-item"><a className="page-link" href="#."><i className='fa-solid fa-arrow-right-long' /></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Shop Style One End */}

    </Layouts>
  );
};
export default ProductGrid;