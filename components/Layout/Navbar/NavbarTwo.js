import React from 'react';
import Link from "next/link"

const NavbarTwo = () => {
    return (
        <nav className="navbar container hatti">
            <div className="navbar__container">
                <div className="navbar__brand">
                    <Link href="/">
                        <a className="navbar__brand__text">Migonest</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavbarTwo;
