import React from 'react';
import { RiMapPin2Line } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
const TabSingleTwo = ({ title, location, season, program, subject, date, status, admitted }) => {
    return (
        <div className="admission__tab__single__item admission__tab__single__item--secondary">
            <div className="admission__tab__single__item__content alt-content">
                <h3>{title}</h3>
                <div className="location">
                    <RiMapPin2Line />
                    <p className="primary-text">{location}</p>
                </div>
                <div className="time">
                    <FaRegCalendarAlt />
                    <p className="primary-text">{season}</p>
                </div>
            </div>
            <div className='application__type alt-type'>
                <p className="secondary-text">{program}</p>
                <p>{subject}</p>
            </div>
            <div className='application__type alt-status'>
                <p className="secondary-text">{status}</p>
                <p>{admitted}</p>
            </div>
            <div className='application__date alt-date'>
                <p className="secondary-text">Applied on</p>
                <p>{date}</p>
            </div>
        </div>
    );
}

export default TabSingleTwo;
