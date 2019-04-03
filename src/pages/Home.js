import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import InputFiled from '../components/InputField';
import WatchTransaction from '../components/home/WatchTransaction';
import Button from '../components/Button';

const Header = styled.h1`
  font-size: ${props => props.theme.headerFont};
  font-weight: ${props => props.theme.fontWeightSize};
`;

export default () => (
  <Layout>
    <Seo title="Home" description="Some description here." />
    <section className="section">
      <div className="container">
        <Header className="title has-text-weight-semibold">Create trigger</Header>
        <WatchTransaction />
        <InputFiled labelText="name" />
        <InputFiled labelText="from address" />
        <InputFiled labelText="to address" />
        <Button buttonText="NEXT" bgColor="red" width="100%" height="51px" />
      </div>
    </section>
  </Layout>
);
