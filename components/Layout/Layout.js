import React, { useState } from 'react';
import Head from "next/head";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children, PageMeta }) => {

    const Meta = {
        title: "Migonest - Global University Admission Guideline",
        ...PageMeta
    }

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [backdrop, setBackdrop] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(sidebarOpen => !sidebarOpen);
        setBackdrop(backdrop => !backdrop);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
        setBackdrop(false);
    }


    return (
        <div className="wrapper">
            <Head>
                <meta charset="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/assets/images/favicon.ico" />
                <title>{Meta.title}</title>
                <meta name="keywords" content="Migonest, Admission, Global Admission" />
                <meta name="description" content="Global University Admission Guideline" />
                <meta name="author" content="Mohammad Wahedul Haque" />
            </Head>
            <Navbar handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} backdrop={backdrop} />
            <section className="main">
                {children}
            </section>
        </div>
    );
}

export default Layout;
