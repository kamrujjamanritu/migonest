import React, { useState } from 'react'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";
import Checkout from './Checkout';
import UniversityInfo from './UniversityInfo';
import PersonalInfo from './PersonalInfo';
import EducationalBackground from './EducationalBackground';
import Experience from './Experience';
import TestScore from './TestScore';
import UploadDocuments from './UploadDocuments';
import ReviewApplication from './ReviewApplication';
import Payment from "./Payment"
import PaymentSuccess from "./PaymentSuccess"
import PaymentFailed from "./PaymentFailed"

const ApplicationForm = () => {

    const [formStep, setFormStep] = useState(0);

    const prevFormStep = () => {
        setFormStep(formStep - 1)
    }

    const nextFormStep = (e) => {
        setFormStep(formStep + 1)
        e.preventDefault;
    }


    return (
        <section className="application-form">
            {
                formStep === 0 ? <Link href="/">
                    <a className='previous-btn'><HiOutlineArrowLeft /></a>
                </Link> :
                    formStep === 7 ? <a className="previous-btn check" onClick={prevFormStep}>
                        <span className="icons"><HiOutlineArrowLeft /></span><span className='checkout'>Checkout</span>
                    </a> :
                        formStep === 8 ? <a className="previous-btn check" onClick={prevFormStep}>
                            <span className="icons"><HiOutlineArrowLeft /></span> <span className='checkout'>Payment</span>
                        </a> :
                        formStep === 9 ? null :
                        formStep === 10 ? null :
                            <a className="previous-btn" onClick={prevFormStep}>
                                <HiOutlineArrowLeft />
                            </a>
            }
            <div>
                <form action="#" method='post' autoComplete='off'>
                    <div className="form__group">
                        {
                            formStep === 0 ? <UniversityInfo /> :
                                formStep === 1 ? <PersonalInfo /> :
                                    formStep === 2 ? <EducationalBackground /> :
                                        formStep === 3 ? <Experience /> :
                                            formStep === 4 ? <TestScore /> :
                                                formStep === 5 ? <UploadDocuments /> :
                                                    formStep === 6 ? <ReviewApplication /> :
                                                        formStep === 7 ? <Checkout nextFormStep={nextFormStep} /> :
                                                            formStep === 8 ? <Payment nextFormStep={nextFormStep} /> :
                                                            formStep === 9 ? <PaymentSuccess nextFormStep={nextFormStep} /> :
                                                            formStep === 10 ? <PaymentFailed nextFormStep={nextFormStep} /> :
                                                                null
                        }
                        {
                            formStep === 0 ?
                                <div className="form__cta">
                                    <Link href="/">
                                        <a className='frm-btn frm-btn-two' disabled>Cancel</a>
                                    </Link>
                                    <button className='frm-btn' onClick={nextFormStep}>Confirm</button>
                                </div> :
                                formStep === 5 ?
                                    <div className="form__cta form__cta-alt form-text-center">
                                        <a className='frm-btn frm-btn--alt' onClick={nextFormStep}>Review Application</a>
                                    </div> :
                                    formStep === 6 ?
                                        <div className="form__cta form__cta-alt form-text-center atc">
                                            <a className='frm-btn frm-btn--alt' onClick={nextFormStep}>Submit Application</a>
                                        </div> :
                                        formStep === 7 ? null :
                                        formStep === 8 ? null :
                                        formStep === 9 ? null :
                                        formStep === 10 ? null :
                                            <div className="form__cta form__cta-alt">
                                                <a className='frm-btn frm-btn--alt' onClick={nextFormStep}>Next<HiOutlineArrowRight /></a>
                                            </div>


                        }

                    </div>
                </form>
            </div>
        </section>
    )
}

export default ApplicationForm
