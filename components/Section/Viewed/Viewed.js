import Link from 'next/link';
import Image from 'next/image';
import { RiMapPin2Line } from "react-icons/ri";
import suggestedUniversityData from '../../../pages/api/universityData.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Viewed = () => {
    return (
        <section className="viewed">
            <div className="container">
                <div className="viewed__wrapper">
                    <div className='viewed__head'>
                        <h2>Previously viewed</h2>
                    </div>
                    <div className="universities__items">
                        <div className="universities__item-wrapper">
                            <Swiper
                                spaceBetween={12}
                                slidesPerView={"auto"}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                                autoplay={{
                                    delay: 6000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints = {{
                                    1200: {
                                        spaceBetween: 24,
                                      },
                                }}

                            >
                                {
                                    suggestedUniversityData.map((viewedItem, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="universities__item">
                                                    <div className="universities__item__thumb">
                                                        <Link href={`/${viewedItem.name}`}>
                                                            <a>
                                                                <Image src={viewedItem.image} layout="fill" alt='image' />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="universities__item__content-wrapper">
                                                        <div className="universities__item__content">
                                                            <h3>
                                                                <Link href={`/${viewedItem.name}`}>
                                                                    <a>{viewedItem.name}</a>
                                                                </Link>
                                                            </h3>
                                                            <p className="primary-text">{viewedItem.category}</p>
                                                        </div>
                                                        <div className="universities__item__info">
                                                            <div className="location">
                                                                <RiMapPin2Line />
                                                                <p className="primary-text">{viewedItem.location}</p>
                                                            </div>
                                                            <div className={viewedItem.tag ? "private" : "tag"}>
                                                                <p className="secondary-text">{viewedItem.type}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Viewed;
