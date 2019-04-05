import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import InputFiled from '../components/InputField';
import WatchTransaction from '../components/home/WatchTransaction';
import Button from '../components/Button';
import Nonce from '../components/Nonce';

const Header = styled.h1`
  margin-top: 1.1rem;
  margin-bottom: 1.1rem !important;
`;

export default () => (
  <Layout>
    <Seo title="Home" description="Some description here." />
    <section className="section">
      <div className="container">
        <Header className="title has-text-weight-bold">Create trigger</Header>
        <InputFiled labelText="trigger name" />
        <WatchTransaction />
        {/* <InputFiled labelText="from address" />
        <InputFiled labelText="to address" /> */}
        <Button buttonText="NEXT" bgColor="red" width="100%" height="51px" />
        <Nonce />
      </div>
    </section>
  </Layout>
);
