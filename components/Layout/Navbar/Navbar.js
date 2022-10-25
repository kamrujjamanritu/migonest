import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import notificationData from "../../../data/notification-data.json";
import Backdrop from "../../Backdrop/Backdrop";
import { IoLogOut } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Navbar = ({ handleSidebar, sidebarOpen }) => {

  // notification modal
  const [notificationModal, setNotificationModal] = useState(false);

  // profile modal
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <nav className="navbar container">
      <div className="navbar__container">
        <div className="navbar__brand">
          <Link href="/">
            <a className="navbar__brand__text">Migonest</a>
          </Link>
        </div>
        <div className="navbar__content">
          <Backdrop onClick={() => setNotificationModal(notificationModal)}>
            <div className="navbar__notification">
              <a className="navbar__notification__icon" onClick={() => setNotificationModal(notificationModal => !notificationModal)}>
                <IoMdNotificationsOutline />
              </a>
              <div className={"navbar__notification__wrapper" + (notificationModal ? " navbar__notification__wrapper__active" : " navbar__notification__wrapper__deactive")}>
                <div className="navbar__notification__dropdown">
                  {notificationData.map((item, index) => {
                    return (
                      <div className="navbar__notification__item" key={index}>
                        <Link href={item.path}>
                          <a>
                            <span className="navbar__notification__item__header">{item.title}</span>
                            <span className="secondary-text">{item.subtitle}</span>
                            <span className="secondary-text navbar__notification__item__time">Date: {item.date}</span>
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Backdrop>
          <div className="navbar__profile">
            <div className="navbar__profile__wrapper">
              <Link href="/profile">
                <a>
                  <Image src="/assets/images/profile-avatar.png" width="40" height="40" alt="Profile Avatar" />
                </a>
              </Link>
              <Backdrop onClick={() => setProfileMenu(profileMenu)}>
                <IoChevronDownSharp className='navbar__dropdown__arrow' onClick={() => setProfileMenu(profileMenu => !profileMenu)} />
                <div className={"navbar__profile__content" + (profileMenu ? " navbar__profile__content__active" : " navbar__profile__content__deactive")}>
                  <div className="navbar__profile__items">
                    <Link href="/">
                      <a className='navbar__profile__items-link'><IoLogOut />Log Out</a>
                    </Link>
                  </div>
                </div>
              </Backdrop>
            </div>
          </div>
          <div className="sidebar__toggle">
            <button onClick={handleSidebar}>
              <FaBars className={"open-sidebar" + (sidebarOpen ? " open-sidebar-close" : "")} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
