import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import BackButton from '../components/BackButton';
import Title from '../components/Title';

export default () => (
    <Layout>
        <Seo title="TemplateAbi" description="Some description here." />
            <section className="section">
                <div className="container">
                    <div className="is-flex">
                        <BackButton />
                        <Title text="ABI Template" />
                    </div>
                </div>
            </section>
    </Layout>
)