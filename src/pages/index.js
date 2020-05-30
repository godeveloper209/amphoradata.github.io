import React from "react";
import classnames from "classnames";
import { Redirect } from "react-router-dom";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    title: <>Leverage your insight</>,
    imageUrl: "img/data_network.PNG",
    description: (
      <>
        Connect your different data sources instantly. Access your insights
        remotely and securely.
      </>
    ),
  },
  {
    title: <>Collaborate with others</>,
    imageUrl: "img/data_network.PNG",
    description: (
      <>
        Integrate with third parties instantly. Access their data and share your
        own.
      </>
    ),
  },
  {
    title: <>Reduce risk</>,
    imageUrl: "img/data_infra.PNG",
    description: (
      <>
        Manage access, extract-transfer-load, quality and use from a single
        workbench.
      </>
    ),
  },
  {
    title: <>Reduce cost</>,
    imageUrl: "img/data_infra.PNG",
    description: (
      <>Focus on what matters to you and leave the data infrastructure to us.</>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Welcome to Amphora Data ${siteConfig.title}`}
      description="Next gen data storage and integration"
    >
      <link
        href="http://fonts.googleapis.com/css?family=Fjalla+One"
        rel="stylesheet"
        type="text/css"
      ></link>
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container container--fluid">
          <div className="row mt-2">
            <div className="col col--8">
              <div className="pl-4">
                <h1 className="hero__title text--left">{siteConfig.title}</h1>
                <p className="hero__subtitle text--left">
                  {siteConfig.tagline}
                </p>
              </div>
              <div style={{ paddingLeft: "240px" }}>
                <h2 className="text--left">What you get with Amphora Data</h2>
                <div className="d-flex">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="text--primary"
                  />
                  &nbsp;
                  <h3 className="text--left">Simplify your integration</h3>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="text--primary"
                  />
                  &nbsp;
                  <h3 className="text--left">Reduce your risk</h3>
                </div>
                <div className="d-flex">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="lg"
                    className="text--primary"
                  />
                  &nbsp;
                  <h3 className="text--left">Share data quicker and easier</h3>
                </div>
                <p
                  className={classnames("text--left mt-4", styles.description)}
                >
                  <Link
                    className={classnames(styles.getStarted)}
                    to={useBaseUrl("https://app.amphoradata.com/Quickstart")}
                  >
                    <span className="text--white">Read more about our Solution's benifits&nbsp;&nbsp;</span> 
                    <FontAwesomeIcon icon={faAngleRight} color="white"/>
                  </Link>
                </p>
              </div>
            </div>
            <div className="col col--4">
              <div className={classnames("mb-4", styles.buttons)}>
                <Link
                  className={classnames(
                    "button button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("https://app.amphoradata.com/Quickstart")}
                >
                  Login
                </Link>
              </div>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    "button button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("https://app.amphoradata.com/Quickstart")}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={classnames("p-4", styles.presentationContainer)}>
          <p className="display-3">Here's how it works</p>
          <div className={classnames(styles.placeholderSection)}></div>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--primary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("https://app.amphoradata.com/Quickstart")}
            >
              Register for Free
            </Link>
          </div>
        </div>
        <div className={classnames(styles.heroBanner)}>
          <div className={classnames("p-4", styles.opacityContainer)}>
            <div className="container container--fluid">
              <div className={classnames("row py-4", styles.spaceBetween)}>
                <div className="col col--4">
                  <h2 className="mb-8">
                    We Reduce The Number Of Integrations And APIs You Deal With
                    To One
                  </h2>
                  <h2 className="mb-8">
                    Share Your Data Instantly With Any User Globally
                  </h2>
                  <h2>
                    Use Our Insfrastructure So You Don't Have To Build Your Own
                  </h2>
                </div>
                <div className="col col--4">
                  <h2 className="mb-4">
                    Watch The Video To Learn How Can Help You
                  </h2>
                  <ReactPlayer url="https://youtu.be/rBt_743oT18" width="100%"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classnames("p-4 text--center")}>
          <div className="container container--fluid">
            <div className={classnames("row", styles.spaceBetween)}>
              <div className="col col--4">
                <h2>How We Think About Data</h2>
                <p className={classnames(styles.description)}>
                  Data privacy, governance, and ethics is critical. We operate
                  by the principles of the National Farmers Federation Data
                  Code, the European General Data Protection Regulation, and
                  relevant local laws.
                </p>
                <p className={classnames(styles.description)}>
                  Learn more about our&nbsp;
                  <Link
                    className={classnames(styles.getStarted)}
                    to={useBaseUrl("https://app.amphoradata.com/Quickstart")}
                  >
                    Privacy and Security Policy
                  </Link>
                </p>
              </div>
              <div className="col col--4">
                <h2>We'd Like To Hear From You</h2>
                <p className={classnames(styles.description)}>
                  Get in contact with us if you want to learn more about Amphora
                  Data and how we can help you connect and manage data better.
                </p>
                <p className={classnames(styles.description)}>
                  Phone us at +61 7 3172 9948, or email us at
                </p>
                <p className={classnames(styles.description)}>
                  <Link
                    className={classnames(styles.getStarted)}
                    to={useBaseUrl("https://app.amphoradata.com/Quickstart")}
                  >
                    contact@amphoradata.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main> */}
    </Layout>
  );
}

// export default Home;
// this overrides the default behaviour, and redirects to the docs page.
function CustomRedirect() {
  return <Redirect to="/docs/contents" />;
}
export default Home;
