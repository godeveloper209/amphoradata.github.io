import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function pricing() {
  return (
    <Layout title="Leadership Team">
      <div className="container container--fluid">
        <div className="row p-4">
          <h2 className="mt-12 mb-8">
            We Are An Experienced Team With Distinctive Expertise In Software
            Engineering, Data Governance, People Leadership, Operations,
            Agriculture, Data Science And Strategy.
          </h2>
        </div>
        <div className={classnames("row", styles.justifyContentCenter)}>
          <div className="col col--4">
            <img src="img/IMG_1205.jpg" alt="leadership team" />
          </div>
          <div className="col col--4">
            <p className="display-2">Isaac Donnelly</p>
            <h3>Managing director and co-founder</h3>
            <p className="body-1 mb-4">
              Isaac leads the direction and operations of Amphora Data as well
              as ensuring customers get the right outcomes.
            </p>
            <p className="body-1 mb-4">
              He was previously an Engagement Manager at McKinsey & Company
              specialising in data, analytics and technology strategy and
              transformation. He worked with many of Australia and New Zealand’s
              largest companies. He also led the start up practice and worked
              with over 50 early stage companies.
            </p>
            <p className="body-1 mb-4">
              Isaac has a Ph.D. in Applied Mathematics from UNSW and was the
              recipient of the prestigious Fulbright award in 2015.
            </p>
            <p className="body-1 mb-4">
              He has previously been involved in the development of IoT hardware
              and software for yacht racing.
            </p>
            <p className="body-1 mb-4">
              He grew up on a small farm in Northern NSW where his family still
              grows citrus.
            </p>
          </div>
        </div>
        <div
          className={classnames("row mt-12 mb-12", styles.justifyContentCenter)}
        >
          <div className="col col--4 text--right">
            <p className="display-2">Rian Finnegan</p>
            <h3>Chief technology officer and co-founder</h3>
            <p className="body-1 mb-4">
              Rian leads the technology and product development at Amphora Data
              and also looks after our people.
            </p>
            <p className="body-1 mb-4">
              Prior to starting Amphora Data, he was a Software Engineer at
              Microsoft focused on building products on Azure for external
              clients.
            </p>
            <p className="body-1 mb-4">
              He holds a double Bachelor of Electrical Engineering & Arts from
              UNSW and previously worked for a leading industrial IoT solutions
              provider and software vendor.
            </p>
            <p className="body-1 mb-4">
              Rian is from Albury-Wodonga, a regional centre located on the
              Victorian/NSW border where his family still lives.
            </p>
          </div>
          <div className="col col--4">
            <img src="img/IMG_1209.jpg" alt="leadership team" />
          </div>
        </div>
        <div className={classnames("row mt-12 mb-12", styles.justifyContentCenter)}>
          <Link
            className={classnames(styles.getStarted)}
            to={useBaseUrl("https://app.amphoradata.com/Quickstart")}
          >
            <h2>
              in
            </h2>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default pricing;
