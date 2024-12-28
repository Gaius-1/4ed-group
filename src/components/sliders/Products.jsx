import Data from "@data/sliders/products.json";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from "next/link";
import Image from "next/image";

const ProductsSlider = () => {
    return (
        <section className="gap shop-style-one addition">
            <div className="heading">
                <figure>
                    <img src="/img/heading-icon.png" alt="heading-icon" width={50} height={50} />
                </figure>
                <span>Our Tools</span>
                <h2>Specialized Tools & Equipments</h2>
            </div>
            <div className="container">
                <Swiper
                    autoplay={{
                        delay: 2000,
                    }}
                    loop="true"
                    speed={800}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {Data.items.slice(0, 6).map((item, key) => (
                        <SwiperSlide key={`product-${key}`}>
                            <div className="product h-full">
                                <div className="main-data h-full flex flex-col">
                                    <div className="btn-hover flex-grow">
                                        <figure className="h-0 pb-[100%] relative overflow-hidden">
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                // layout="fill" 
                                                // objectFit="cover"
                                                className="absolute inset-0 w-full h-full"
                                            />
                                        </figure>
                                    </div>
                                    <div className="data mt-4">
                                        <div className="ratings">
                                            <i className="fa-solid fa-star"></i>
                                            <span>{item.rating}</span>
                                        </div>
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}
                <div className="col-lg-12 text-center mt-5">
                    <Link href="/product-grid" className="theme-btn">
                        Explore All Machines <i className="fa-solid fa-arrow-up-long"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsSlider;

