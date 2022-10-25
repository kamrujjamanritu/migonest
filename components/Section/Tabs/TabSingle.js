import React from 'react';
import { RiMapPin2Line } from "react-icons/ri";
import Link from "next/link"

const TabSingle = ({ path, title, category, location }) => {
    return (
        <div className="admission__tab__single__item">
            <div className="admission__tab__single__item__content">
                <h3>{title}</h3>
                <p className="primary-text">{category}</p>
                <div className="location">
                    <RiMapPin2Line />
                    <p className="primary-text">{location}</p>
                </div>
            </div>
            <div className="admission__tab__single__item__cta">
                <Link href={path}>
                    <a>Resume Application</a>
                </Link>
            </div>
        </div>
    );
}

export default TabSingle;
