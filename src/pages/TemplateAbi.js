import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import BackButton from '../components/BackButton';
import Title from '../components/Title';
import TextField from '../components/TextField';
import Template from '../components/Template';
import Button from '../components/Button';

export default () => (
    <Layout>
        <Seo title="TemplateAbi" description="Some description here." />
            <section className="section">
                <div className="container">
                    <div className="is-flex">
                        <BackButton />
                        <Title text="ABI Template" />
                    </div>
                    <TextField />
                    <Title text="Pre built templates" />
                    <Template />
                    <Template />
                    <Template />
                    <Button buttonText="FINISH" />
                </div>
            </section>
    </Layout>
)