import React from 'react';
import Layout from '../pages/layout';
import ClientComponent from '../components/ClientComponent.js';
import ServerComponent from '../components/ServerComponent';

const HomePage = ({ serverData }) => {
  return (
    <Layout>
      <h1>Next.js Components Example</h1>
      <ClientComponent />
      <ServerComponent data={serverData} />
    </Layout>
  );
};

export async function getServerSideProps() {
  // Simulate fetching data from an API
  const serverData = 'Data fetched from the server';
  return {
    props: { serverData },
  };
}

export default HomePage;
