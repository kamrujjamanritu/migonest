import Layout from "../components/Layout/Layout";
import AdmissionTab from "../components/Section/Tabs/AdmissionTab";

const Admission = () => {
    return (
        <div>
            <Layout PageMeta={{
                title: "Migonest Profile - Global University Admission Guideline"
            }}>
                <AdmissionTab />

            </Layout>
        </div>
    );
}

export default Admission;
