import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiMapPin2Line } from "react-icons/ri";
import suggestedUniversityData from '../../../pages/api/universityData.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const allSuggestedUniversities = ['Worldwide', ...new Set(suggestedUniversityData.map(suggestedItem => suggestedItem.area))];

const SuggestedUniversities = () => {

    const [suggestedItems, setSuggestedItems] = useState(suggestedUniversityData);

    const [suggestedFilterBtn, setSuggestedFilterBtn] = useState(allSuggestedUniversities);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const filter = (button) => {

        if (button === 'Worldwide') {
            setSuggestedItems(suggestedUniversityData);
            return;
        }

        const filteredData = suggestedUniversityData.filter(suggestedItem => suggestedItem.area === button);
        setSuggestedItems(filteredData);
    }


    return (
        <section className="suggested section-space-top">
            <div className="container">
                <div className="universities">
                    <div className="universities__head">
                        <h2>Suggested Universities</h2>
                        <div className="universities__buttons">
                            <div className="universities__buttons__inner">
                                {
                                    suggestedFilterBtn.map((cat, index) => {
                                        return <button type="button" key={index} onClick={() => { filter(cat); setSelectedIndex(index); }} className={"filter-btn" + (selectedIndex === index ? " filter-btn-active" : "")}>{cat}</button>
                                    })
                                }
                                <Link href="/admission">
                                    <a className="filter-btn">More</a>
                                </Link>
                            </div>
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
                                        delay: 8000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints = {{
                                        1200: {
                                            spaceBetween: 24,
                                          },
                                    }}
                                >
                                    {
                                        suggestedItems.map((suggestedItem, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className="universities__item">
                                                        <div className="universities__item__thumb">
                                                            <Link href={`/${suggestedItem.name}`}>
                                                                <a>
                                                                    <Image src={suggestedItem.image} layout="fill" alt='image' />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="universities__item__content-wrapper">
                                                            <div className="universities__item__content">
                                                                <h3>
                                                                    <Link href={`/${suggestedItem.name}`}>
                                                                        <a>{suggestedItem.name}</a>
                                                                    </Link>
                                                                </h3>
                                                                <p className="primary-text">{suggestedItem.category}</p>
                                                            </div>
                                                            <div className="universities__item__info">
                                                                <div className="location">
                                                                    <RiMapPin2Line />
                                                                    <p className="primary-text">{suggestedItem.location}</p>
                                                                </div>
                                                                <div className={suggestedItem.tag ? "private" : "tag"}>
                                                                    <p className="secondary-text">{suggestedItem.type}</p>
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
            </div>
        </section>
    );
}

export default SuggestedUniversities;
