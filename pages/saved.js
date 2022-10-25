import Link from "next/link";
import Image from 'next/image';
import { RiMapPin2Line } from "react-icons/ri";
import Layout from "../components/Layout/Layout";
import * as Icons from "react-icons/md";
import universityData from './api/universityData.json';
import { universities } from './api/universities';

export const getStaticProps = async () => {
    return {
        props: {
            universityData: universities,
        },
    };
};



const Saved = ({ universityData }) => {


    return (
        <div>
            <Layout PageMeta={{
                title: "Migonest Saved - Global University Admission Guideline"
            }}>
                <section className="saved">
                    <div className="saved__container">
                        {
                            universityData.slice(0, 6).map((savedItem, index) => {
                                return (

                                    <div className="saved__item" key={index}>
                                        <div className="universities__item">
                                            <div className="universities__item__thumb">
                                                <Link href={`/${savedItem.name}`}>
                                                    <a>
                                                        <Image src={savedItem.image} layout="fill" alt='image' />
                                                    </a>
                                                </Link>
                                                <span className="bookmark">
                                                    <Icons.MdBookmark />
                                                </span>
                                            </div>
                                            <div className="universities__item__content-wrapper">
                                                <div className="universities__item__content">
                                                    <h3>
                                                        <Link href={`/${savedItem.name}`}>
                                                            <a>{savedItem.name}</a>
                                                        </Link>
                                                    </h3>
                                                    <p className="primary-text">{savedItem.category}</p>
                                                </div>
                                                <div className="universities__item__info">
                                                    <div className="location">
                                                        <RiMapPin2Line />
                                                        <p className="primary-text">{savedItem.location}</p>
                                                    </div>
                                                    <div className={savedItem.tag ? "private" : "tag"}>
                                                        <p className="secondary-text">{savedItem.type}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </Layout>
        </div>
    );
}

export default Saved;
