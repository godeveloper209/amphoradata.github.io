import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";

function pricing() {
  return (
    <Layout title="Leadership Team">
      <div className="container container--fluid">
        <div className={classnames("row mt-12", styles.justifyContentCenter)}>
          <div className={classnames(styles.rightAbsolute)} style={{width: "200px"}}>
            <Link
              className={classnames(
                "button button--active button--danger button--lg px-6 mb-4 py-2",
                styles.buttons
              )}
              to={useBaseUrl("https://app.amphoradata.com/Quickstart")}
            >
              <h6 className={classnames("mb-0", styles.whiteSpace)}>GET THE FACTPACK</h6>
            </Link>
            <Link
              className={classnames(
                "button button--active button--danger  button--lg px-6 py-2",
                styles.buttons
              )}
              to={useBaseUrl("https://app.amphoradata.com/Quickstart")}
            >
              <h6 className={classnames("mb-0", styles.whiteSpace)}>REGISTER FOR FREE</h6>
            </Link>
          </div>

          <div className="col col--9">
            <p className="display-3">Simplify your data integration</p>

            <div className={classnames("row mt-4", styles.spaceEvenly)}>
              <div className="col col--6">
                <h2 className="mt-4">Reduce Cost And Headaches</h2>
                <img
                  src="../img//Integrate_data_pic.png"
                  alt="leadership team"
                />
                <p className="body-1 mb-4">
                  We reduce the number of integrations and APIs you deal with to
                  one.
                </p>
                <p className="body-1 mb-4">
                  We will migrate your integrations.
                </p>
              </div>
              <div className="col col--6">
                <h2 className="mt-4">Be More Productive</h2>
                <img src="../img/code_white.png" alt="leadership team" />
                <p className="body-1 mb-4">
                  All data on Amphora is machine readable.
                </p>
                <p className="body-1 mb-4">
                  Each dataset has transparent metadata (quality, date, size
                  etc) so you know what you are getting.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classnames("row", styles.justifyContentCenter)}>
          <div className="col col--5"></div>
          <div className="col col--5"></div>
        </div>
        <div className={classnames("row mt-8", styles.justifyContentCenter)}>
          <div className="col col--9">
            <hr
              style={{
                borderWidth: "0.5px",
              }}
            />
          </div>
        </div>

        <div
          className={classnames("row mt-4 mb-2", styles.justifyContentCenter)}
        >
          <p className="display-3">Our features</p>
        </div>
        <div className={classnames("row mt-2", styles.justifyContentCenter)}>
          <div className="col col--3">
            <img src="../img/solution_picture_0.png" alt="leadership team" />
          </div>
          <div className="col col--6">
            <h2>Data Integration Platform</h2>
            <p className="body-1 mb-4">
              Connect any dataset on Amphora in 30 seconds. We provide the data
              infrastructure and ETL flow and tooling.
            </p>
          </div>
        </div>

        <div className={classnames("row mt-2", styles.justifyContentCenter)}>
          <div className="col col--3">
            <img src="../img/solution_picture_1.png" alt="leadership team" />
          </div>
          <div className="col col--6">
            <h2>Data Search And Discovery Workbench</h2>
            <p className="body-1 mb-4">
              Find any data you need in seconds. All data containers have
              standardised, transparent metadata so you know exactly what your
              getting.
            </p>
          </div>
        </div>

        <div className={classnames("row mt-2", styles.justifyContentCenter)}>
          <div className="col col--3">
            <img src="../img/solution_picture_3.png" alt="leadership team" />
          </div>
          <div className="col col--6">
            <h2>Modern APIs And SDKs</h2>
            <p className="body-1 mb-4">
              We use modern APIs and have SDKs in python, node.js and .NET. Get
              the latest at GitHub.
            </p>
          </div>
        </div>

        <div className={classnames("row mt-2", styles.justifyContentCenter)}>
          <div className="col col--3">
            <img src="../img/solution_picture_2.png" alt="leadership team" />
          </div>
          <div className="col col--6">
            <h2>Free Migration</h2>
            <p className="body-1 mb-4">
              We offer a free service to migrate any data feed you want into
              Amphora with our Team or Institution plans. Get the benefits from
              simpler integration without any upfront costs.
            </p>
          </div>
        </div>
        <div className={classnames("row mt-8", styles.justifyContentCenter)}>
          <div className="col col--9">
            <hr
              style={{
                borderWidth: "0.5px",
              }}
            />
          </div>
        </div>
        <div
          className={classnames("row mt-4 mb-2", styles.justifyContentCenter)}
        >
          <p className="display-3">Success stories</p>
        </div>
        <div className={classnames("row mt-8", styles.spaceEvenly)}>
          <div className="col col--3">
            <img src="../img/use_case_1.png" alt="leadership team" />
            <p className="body-1 mb-4">
              A leading Australian agtech uses Amphora Data to access new data
              sources.
            </p>
            <p className="body-1 mb-4">
              They use Amphora Data to get satellite imagery, soil maps,
              electricity forecasts is used in their farmer facing software.
            </p>
          </div>
          <div className="col col--3">
            <img src="../img/use_case_2.png" alt="leadership team" />
            <p className="body-1 mb-4">
              Eliiza, a leading data science consultancy in Melbourne, uses
              Amphora Data to find new datasets to develop new prediction tools
              for electricity prices and river flows.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default pricing;
