import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import BackButton from '../components/BackButton';
import Title from '../components/Title';
import InputFiled from '../components/InputField';
import Button from '../components/Button';

export default () => (
    <Layout>
        <Seo title="TransactionCheck" description="Some description here." />
            <section className="section">
                <div className="container">
                    <div className="is-flex">
                        <BackButton />
                        <Title text="Set method values" />
                    </div>
                    <InputFiled labelText="FROM ADDRESS" />
                    <InputFiled labelText="TO ADDRESS" />
                    <Button buttonText="SUBMIT" />
                </div>
            </section>
    </Layout>
)