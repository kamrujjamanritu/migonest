import React, { useState } from 'react';
import Checkout from './Checkout';
import Documents from './Documents';
import Education from './Education';
import Error from './Error';
import Experience from './Experience';
import Payment from './Payment';
import PersonalInfo from './PersonalInfo';
import Review from './Review';
import Scores from './Scores';
import Successful from './Successful';
import UniversityInfo from './UniversityInfo';
import Link from "next/link"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const ApplicationForm = () => {

    const [page, setPage] = useState(0);

    const prevForm = () => {
        setPage(page - 1);
    }

    const nextForm = (e) => {
        setPage(page + 1);
        e.preventDefault();
    }

    return (
        <>
            <section className="form-wrapper">
                <div className="form-container">
                    <form action="#" method="post" autoComplete='off'>
                        {
                            page === 0 ? <UniversityInfo /> : page === 1 ? <PersonalInfo /> : page === 2 ? <Education /> : page === 3 ? <Experience /> : page === 4 ? <Scores /> : page === 5 ? <Documents /> : null
                        }
                        <div className="versity-info-confirm">
                            {
                                page == 0 ? <Link href="/">
                                    <a className="frm-btn frm-btn-two">Cancel</a>
                                </Link> : null
                            }
                            {
                                page == 0 ? <button className="frm-btn" onClick={nextForm}>Confirm</button>
                                    : <button className="frm-btn frm-btn--alt" onClick={nextForm}>Next<FiArrowRight /> </button>
                            }
                        </div>
                    </form>
                </div>
            </section>
            {
                page !== 0 && page !== 1 ? <button className="prev-btn" onClick={prevForm}><FiArrowLeft /></button>
                    : null
            }
        </>
    );
}

export default ApplicationForm;
