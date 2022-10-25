

import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import sidebarData from '../../../data/sidebar-data.json';
import { IoChevronDownSharp } from "react-icons/io5";
import Backdrop from "../../Backdrop/Backdrop";
import Image from "next/image";
import { IoLogOut } from "react-icons/io5";
import { MdClose } from "react-icons/md";

import * as Icons from "react-icons/md";

const CustomMdIcon = ({ name }) => {
  const MdIcon = Icons[name];
  if (!MdIcon) return <p>Icon not found!</p>;
  return (
    <MdIcon />
  );
};


const Sidebar = ({ sidebarOpen, closeSidebar, backdrop }) => {

  const router = useRouter();

  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={"backdrop" + (backdrop ? " backdrop__active" : "")} onClick={closeSidebar}>
      <MdClose className="close" onClick={closeSidebar} />
      <div className={"sidebar" + (sidebarOpen ? " sidebar__active" : "")} onClick={(e) => { e.stopPropagation() }}>
        <div className="sidebar__wrapper">
          <Link href="/">
            <a className="navbar__brand__text">Migonest</a>
          </Link>
          <Backdrop onClick={() => setDropdown(dropdown)}>
            <div className="sidebar-dropdown-wrapper">
              <div className="sidebar-dropdown">
                <Link href="/profile">
                  <a className="sidebar-profile">
                    <Image src="/assets/images/profile-avatar.png" width="40" height="40" alt="Profile Avatar" />
                    <span>Rachel Sam</span>
                  </a>
                </Link>
                <IoChevronDownSharp className={"navbar__dropdown__arrow" + (dropdown ? " navbar__dropdown__arrow-active" : " ")} onClick={() => setDropdown(dropdown => !dropdown)} />
              </div>
              <div className={"sidebar-dropdown-item" + (dropdown ? " sidebar-dropdown-item-active" : " ")}>
                <Link href="/">
                  <a className="sidebar-dropdown-link"><IoLogOut /> Log Out</a>
                </Link>
              </div>
            </div>
          </Backdrop>
          {sidebarData.map((sideItem, index) => {
            return (
              <div className="sidebar__item" key={index}>
                <Link href={sideItem.path}>
                  <a className={"sidebar__item__link" + (router.pathname === sideItem.path ? " sidebar__item__link__active" : "")}>
                    <span className='sidebar__item__icon'>
                      <CustomMdIcon name={sideItem.icon} />
                    </span>
                    <span className='sidebar__item__text'>
                      {sideItem.title}
                    </span>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
