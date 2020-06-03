import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function pricing() {
  const [currentPlan, setCurrentPlan] = React.useState(1)
  const prices = [
    {
      id: 0,
      title: "FREE",
      perUsers: "Individual",
      fee: "$0.00 monthly",
      isMostPopular: false,
      actionLink: "",
      descriptions: [
        "Discover and consume third party data",
        "Share your data with third parties",
        "Access public data repository",
        "Unlimited data downloads",
        "Personal dashboard",
        "Custom terms and conditions",
        "Custom Access Controls",
      ],
    },
    {
      id: 1,
      title: "TEAM",
      perUsers: "Up to 25 users",
      fee: "$5.00 monthly per user",
      isMostPopular: true,
      actionLink: "",
      descriptions: [
        "Discover and consume third party data",
        "Share your data with third parties",
        "Access public data repository",
        "Unlimited data downloads",
        "Personal dashboard",
        "Custom terms and conditions",
        "Custom Access Controls",
      ],
    },
    {
      id: 2,
      title: "INSTITUTION",
      perUsers: "Unlimited users",
      fee: "$10.00 monthly per user",
      isMostPopular: false,
      actionLink: "",
      descriptions: [
        "Discover and consume third party data",
        "Share your data with third parties",
        "Access public data repository",
        "Unlimited data downloads",
        "Personal dashboard",
        "Custom terms and conditions",
        "Custom Access Controls",
      ],
    },
  ];
  return (
    <Layout title="Pricing">
      <div className="container container--fluid">
        <div
          className={classnames(
            "row mt-12 mb-12 px-2",
            styles.justifyContentCenter
          )}
        >
          {prices.map((price) => (
            <div className="col col--3">
              <div className="price-card">
                <h3 className="text--center display-2 mb-1">{price.title}</h3>
                <div className="text--center">{price.perUsers}</div>
                <h4 className="text--center">{price.fee}</h4>
                {price.isMostPopular && (
                  <div className="text--center mb-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      size="lg"
                      className="text--warning mr-1"
                    />
                    Most popular
                  </div>
                )}

                <div className={classnames("mb-4", styles.buttons)}>
                  <Link
                    className={classnames(
                      "button button--lg full-width",
                      styles.getStarted,
                       currentPlan === price.id && styles.disabledLink,
                       currentPlan === price.id ? "button--secondary" : "button--primary"
                    )}
                    to={useBaseUrl(price.actionLink)}
                    
                  >
                    {currentPlan === price.id ? 'My Current Plan' : 'Select Plan'}
                  </Link>
                </div>
                {price.descriptions.map((description) => (
                  <div className="d-flex mb-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      size="lg"
                      className="text--primary mr-1"
                    />
                    &nbsp;
                    <div className="text--left mb-1">{description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default pricing;
