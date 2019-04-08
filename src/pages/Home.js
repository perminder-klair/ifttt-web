import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Close from '../components/CloseTag';
import InputFiled from '../components/InputField';
import WatchTransaction from '../components/WatchTransaction';
import Button from '../components/Button';
import Title from '../components/Title';

const Heading = styled.div`
  justify-content: space-between;
  margin-top: 1.1rem;
`;

export default () => (
  <Layout>
    <Seo title="Home" description="Some description here." />
    <section className="section">
      <div className="container">
        <Heading className="is-flex">
          <Title text="Create trigger" />
          <Close />
        </Heading>
        <InputFiled labelText="trigger name" />
        <WatchTransaction />
        {/* <InputFiled labelText="from address" />
        <InputFiled labelText="to address" /> */}
        <Button buttonText="NEXT" bgColor="red" width="100%" height="51px" />
      </div>
    </section>
  </Layout>
);
