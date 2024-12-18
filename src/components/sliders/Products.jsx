import Data from "@data/sliders/products.json";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const ProductsSlider = () => {

    return (
        <section className="gap shop-style-one addition">
            <div className="heading">
                <figure>
                    <img src="/img/heading-icon.png" alt="heading-icon" />
                </figure>
                <span>Our Tools</span>
                <h2>Specialized Tools & Equipments</h2>
            </div>
            <div className="container">
                <Swiper
                    // modules={[Navigation, Pagination]}
                    // navigation={true}
                    // pagination={{ clickable: true }}
                    className="row p-slider align-items-center justify-content-between grid"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {Data.items.slice(0, 5).map((item, key) => (
                        <SwiperSlide key={`product-${key}`}>
                            <div className="product">
                                <div className="main-data">
                                    <div className="btn-hover">
                                        <figure className="w-full h-0 pb-[100%] relative overflow-hidden">
                                            <img src={item.image} alt={item.title} className="absolute top-0 left-0 w-full h-full object-cover"/>
                                        </figure>
                                    </div>
                                    <div className="data">
                                        <div className="ratings">
                                            <i className="fa-solid fa-star"></i>
                                            <span>{item.rating}</span>
                                        </div>
                                        {/* <h3><Link href="/product-detail">{item.title}</Link></h3> */}
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                                {/* <Link href="/cart" className="theme-btn">Add to Cart <i className="fa-solid fa-bag-shopping" /></Link> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="col-lg-12 text-center">
                    <Link href="/product-grid" className="theme-btn">Explore All Machines <i className="fa-solid fa-arrow-up-long"></i></Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsSlider;
