import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import { HiOutlineArrowLeft } from "react-icons/hi"
import { RiMapPin2Line } from "react-icons/ri";
import { FaGlobeAsia } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineOpenInNew } from "react-icons/md";

import { BsBookmark } from "react-icons/bs";

import { universities } from './api/universities';

export const getStaticProps = async ({ params }) => {
    const universitiesData = universities.filter((p) => p.name.toString() === params.name);
    return {
        props: {
            data: universitiesData[0],
        },
    };
};

export const getStaticPaths = async () => {
    const paths = universities.map((data) => ({
        params: { name: data.name.toString() },
    }));

    return { paths, fallback: false };
};


const UniversityDetails = ({ data }) => {
    return (
        <div>
            <Layout PageMeta={{
                title: "Migonest Profile - Global University Admission Guideline"
            }}>

                <section className="university-details">
                    <div className="university-details__banner">
                        <img src={data.cover} alt="Cambridge University" className='cover' />
                        <Link href="/">
                            <a className='back-home'>
                                <HiOutlineArrowLeft />
                            </a>
                        </Link>
                        <Link href="/">
                            <a className='bookmark'>
                                <BsBookmark />
                            </a>
                        </Link>
                    </div>
                    <div className="university-details__info-wrapper">
                        <div className="university-details__info university-details__single">
                            <div className="university-details__info-logo">
                                <Link href={`/details/${data.name}`}>
                                    <a>
                                        <img src={data.logo} alt="Cambridge University" />
                                    </a>
                                </Link>
                            </div>
                            <div className="university-details__info-content">
                                <h1>
                                    <Link href={`/details/${data.name}`}>
                                        <a>{data.name}</a>
                                    </Link>
                                </h1>
                                <p className="primary-text">{data.category}</p>
                            </div>
                        </div>
                        <div className="university-details__location university-details__single">
                            <div className="university-details__location-icons">
                                <RiMapPin2Line />
                            </div>
                            <div className="university-details__location-content">
                                <h3>{data.location}</h3>
                                <p className="primary-text">{data.specificAddress}</p>
                            </div>
                        </div>
                        <div className="university-details__type university-details__single">
                            <div className="university-details__location-icons">
                                <FaGlobeAsia />
                            </div>
                            <div className="university-details__location-content">
                                <h3>{data.type}</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="university-requirements">
                    <form action="/" method="post">
                        <div className="form-group-wrapper">
                            <div className="form-group">
                                <label htmlFor="selectDegree">Degree</label>
                                <div className="select-group">
                                    <select name="select__degree" id="selectDegree" disabled="disabled">
                                        <option>Select Degree</option>
                                        <option value="bachelor" key="bachelor">Bachelor</option>
                                        <option value="master&apos;s" key="master&apos;s">Master&apos;s</option>
                                        <option value="diploma" key="diploma">Diploma</option>
                                    </select>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="selectProgram">Study Program</label>
                                <div className="select-group">
                                    <select name="select__degree" id="selecProgram" disabled="disabled">
                                        <option>Select Program</option>
                                        <option value="bachelor" key="bachelor">Bachelor</option>
                                        <option value="master&apos;s" key="master&apos;s">Master&apos;s</option>
                                        <option value="diploma" key="diploma">Diploma</option>
                                    </select>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="selectDSemester">Semester</label>
                                <div className="select-group">
                                    <select name="select__semester" id="selectSemester" disabled="disabled">
                                        <option>Select Semester</option>
                                        <option value="bachelor" key="bachelor">Bachelor</option>
                                        <option value="master&apos;s" key="master&apos;s">Master&apos;s</option>
                                        <option value="diploma" key="diploma">Diploma</option>
                                    </select>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                            <Link href={`/details/${data.name}`}>
                                <a className='form-group-btn'>GO</a>
                            </Link>
                        </div>
                    </form>
                </section>

                <section className="empty">
                    <div className="empty-content">
                        <p>Select degree, program and semester to see requirements</p>
                    </div>
                    <div className="about-university">
                        <h1>About</h1>
                        <p>{data.about}</p>
                    </div>
                    <div className="university-info">
                        <div className="thumb">
                            <img src="assets/images/confused.png" alt="More Info" />
                        </div>
                        <div className='content-wrapper'>
                            <div className="content">
                                <h2>Want to learn more about the University and Programs?</h2>
                            </div>
                            <Link href={data.universityAddress}>
                                <a className='go-to-university' target="_blank">Go to Univeristy<MdOutlineOpenInNew /></a>
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default UniversityDetails
