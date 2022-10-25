import Layout from "../components/Layout/Layout";
import SearchForm from "../components/Section/SearchForm/SearchForm";
import Link from "next/link";
import SuggestedUniversities from "../components/Section/SuggestedUniversities/SuggestedUniversities";
import Viewed from "../components/Section/Viewed/Viewed";

const Home = () => {
  return (
    <div>
      <Layout>
        <section className="hero">
          <div className="hero__container">
            <div className="hero__content">
              <h1>Let’s find university...</h1>
              <p>Get one step closer to your dream</p>
            </div>
          </div>
          <div className="hero__form">
            <SearchForm />
          </div>
        </section>

        <section className="apply">
          <div className="container">
            <div className="apply__content">
              <h1>I have already chosen my university...</h1>
              <p>If you know where to apply, you can continue with the application. </p>
            </div>
            <div className="apply__cta">
              <Link href="/application">
                <a className="apply-now">Apply Now</a>
              </Link>
            </div>
          </div>
        </section>
        <SuggestedUniversities />
        <Viewed />

      </Layout>
    </div>
  );
}

export default Home;
