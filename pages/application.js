import { useState } from "react";
import Layout from "../components/Layout/Layout";
import ApplicationForm from "../components/Section/Form/ApplicationForm";


const Application = () => {

    const [radio, setRadio] = useState(0);

    return (
        <div>
            <Layout PageMeta={{
                title: "Migonest Admission - Global University Admission Guideline"
            }}>
                <ApplicationForm />
            </Layout>
        </div>
    );
}

export default Application;
