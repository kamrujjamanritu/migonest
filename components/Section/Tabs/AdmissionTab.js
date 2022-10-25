import React from 'react';
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabSingle from './TabSingle';
import TabSingleTwo from './TabSingleTwo';

const AdmissionTab = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <div className='tab__btns'>
                        <Tab className="tab__btn">Applied</Tab>
                        <Tab className="tab__btn">Accepted</Tab>
                        <Tab className="tab__btn">Rejected</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <div className="admission__tab__items admission__tab__items-tik">
                        <div className="container">
                            <div className="admission__tab__single">
                                <h4>Draft</h4>
                                <TabSingle path="/" title="University of Toronto" category="Research University" location="Toronto, Canada" criteria={true} />
                                <TabSingle path="/" title="University of Toronto" category="Research University" location="Toronto, Canada" criteria={true} />
                            </div>
                            <hr />
                            <div className="admission__tab__single">
                                <h4>Submitted</h4>
                                <TabSingleTwo title="University of Toronto" location="Toronto, Canada" season="Summer" program="Bachelor" subject="Information Engineering" date="17 Jul, 2022" />
                                <TabSingleTwo title="Technical University of Berlin" location="Berlin, Germany" season="Winter" program="Bachelor" subject="Electrical and Electronics Engineer..." date="11 Nov, 2022" />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="admission__tab__items admission__tab__items-alt">
                        <div className="container">
                            <div className="admission__tab__single admit">
                                <TabSingleTwo title="University of Toronto" location="Toronto, Canada" season="Summer" program="Bachelor" subject="Information Engineering" date="17 Jul, 2022" status="Status" admitted="Not admitted" />
                                <TabSingleTwo title="Technical University of Berlin" location="Berlin, Germany" season="Winter" program="Bachelor" subject="Electrical and Electronics Engineer..." date="11 Nov, 2022" status="Status" admitted="Admitted" />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="admission__tab__items admission__tab__items-tik">
                        <div className="container">
                            <div className="admission__tab__single">
                                <TabSingleTwo title="University of Toronto" location="Toronto, Canada" season="Summer" program="Bachelor" subject="Information Engineering" date="17 Jul, 2022" />
                                <TabSingleTwo title="Technical University of Berlin" location="Berlin, Germany" season="Winter" program="Bachelor" subject="Electrical and Electronics Engineer..." date="11 Nov, 2022" />
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default AdmissionTab;
