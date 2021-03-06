import React from 'react';
import Layout from '@theme/Layout';

function data_mgmt() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Reduce your data management and storage costs whilst reducing risk to your organisation
          We help you
          Reduce data management and storage costs with our off-the-shelf solution. 
          Amphora Data is specifically designed for research groups with frequently updating data sets. You can set up Amphora Data within minutes and integrate into any system connected to the internet. Our costs can be absorbed in your operational expenditure budget and you can quickly ramp your use up-and-down as you need.
          Reduce your risk exposure from data.
          You have full transparency and control for all of your data on Amphora. You can control who can access data through your API. You can set custom terms and conditions for use of your data. You also get better understanding of the quality and source of external data. Trust that your data is held securely with Microsoft’s 256-bit enterprise level encryption. 
          We have done this before. 
          Yellowstone Ecological Research Centre uses Amphora Data to showcase data from the world-famous Yellowstone National Park. This includes animal tracking and river flow data. Using Amphora Data saves precious resources for the Yellowstone team so they can do more research in the wild.
        </p>
      </div>
    </Layout>
  );
}

export default data_mgmt;