import Link from 'next/link'
import Layout from '../../components/Layout/Layout'
import { HiOutlineArrowLeft } from "react-icons/hi"
import { RiMapPin2Line } from "react-icons/ri";
import { FaGlobeAsia } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineOpenInNew } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import { BsBookmark } from "react-icons/bs";

import { universities } from '../api/universities';

export const getStaticProps = async ({ params }) => {
    const universitiesData = universities.filter((p) => p.name.toString() === params.id);
    return {
        props: {
            data: universitiesData[0],
        },
    };
};

export const getStaticPaths = async () => {
    const paths = universities.map((data) => ({
        params: { id: data.name.toString() },
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
                                <Link href={data.universityAddress}>
                                    <a target="_blank">
                                        <img src={data.logo} alt="Cambridge University" />
                                    </a>
                                </Link>
                            </div>
                            <div className="university-details__info-content">
                                <h1>
                                    <Link href={data.universityAddress}>
                                        <a target="_blank">{data.name}</a>
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
                                    <select name="select__degree" id="selectDegree">
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
                                    <select name="select__degree" id="selecProgram">
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
                                    <select name="select__semester" id="selectSemester">
                                        <option>Select Semester</option>
                                        <option value="bachelor" key="bachelor">Bachelor</option>
                                        <option value="master&apos;s" key="master&apos;s">Master&apos;s</option>
                                        <option value="diploma" key="diploma">Diploma</option>
                                    </select>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                            <Link href="/application">
                                <a className='form-group-btn'>GO</a>
                            </Link>
                        </div>
                    </form>
                </section>

                <section className="empty">
                    <div className="requirements">
                        <div className="requirements__content">
                            <div className="language">
                                <div className="language__single">
                                    <p className="primary-text">IELTS</p>
                                    <h1>6.5 <span>/ 9</span></h1>
                                </div>
                                <div className="language__single">
                                    <p className="primary-text">TOFEL</p>
                                    <h1>72 <span>/ 120</span></h1>
                                </div>
                                <div className="language__single">
                                    <p className="primary-text">GRE</p>
                                    <h1>280 <span>/ 340</span></h1>
                                </div>
                                <div className="language__single">
                                    <p className="primary-text">PTE</p>
                                    <h1>58 <span>/ 90</span></h1>
                                </div>
                                <div className="requirements__cta">
                                    <Link href="/application">
                                        <a>Apply Now</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="additional-requirements">
                                <div className="intro">
                                    <h2>Admission requirements</h2>
                                    <p>For Master&apos;s Program in Information Technology</p>
                                </div>
                                <ul>
                                    <li>
                                        <BsArrowRightShort /> <span>
                                            <strong>Academic Transcripts -</strong> The marks statement provided by the education board after completion of bachelor&apos;s and higher secondary degree.
                                        </span>
                                    </li>
                                    <li>
                                        <BsArrowRightShort /> <span>
                                            <strong>Resume/CV -</strong> This provides a summary of the experience and skills of the student.
                                        </span>
                                    </li>
                                    <li>
                                        <BsArrowRightShort /> <span>
                                            <strong>English Language Requirement Scores</strong> like TOEFL, IELTS, etc.
                                        </span>
                                    </li>
                                    <li>
                                        <BsArrowRightShort /> <span>
                                            <strong>Financial Documentation -</strong> The Proof that shows the financial background of the student.
                                        </span>
                                    </li>
                                    <li>
                                        <BsArrowRightShort /> <span>
                                            <strong>Letter of Recommendation -</strong> This shows who recommended the student to pursue the degree.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="requirements__cta requirements__alt">
                            <Link href="/admisson">
                                <a>Apply Now</a>
                            </Link>
                        </div>
                    </div>
                    <div className="about-university">
                        <h1>About</h1>
                        <p>{data.about}</p>
                    </div>
                    <div className="university-info">
                        <div className="thumb">
                            <img src="/assets/images/confused.png" alt="More Info" />
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
