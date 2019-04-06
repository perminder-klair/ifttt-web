import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import BackButton from '../components/BackButton';
import Title from '../components/Title';
import SendPayments from '../components/SendPayments';

export default () => (
    <Layout>
        <Seo title="Filter" description="Some description here." />
            <section className="section">
                <div className="container">
                    <div className="is-flex">
                        <BackButton />
                        <Title text="Select filter type" />
                    </div>
                    <SendPayments option="From address filter" />
                    <SendPayments option="To address filter" />
                    <SendPayments option="Contract address filter" />
                    <SendPayments option="Nonce between filter" />
                    <SendPayments option="Gas price filter" />
                    <SendPayments option="Gas limit filter" />
                </div>
            </section>
    </Layout>
)