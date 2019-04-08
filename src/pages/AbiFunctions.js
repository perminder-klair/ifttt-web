import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import BackButton from '../components/BackButton';
import Title from '../components/Title';
import SendPayments from '../components/SendPayments';

export default () => (
    <Layout>
        <Seo title="AbiFunctions" description="Some description here." />
        <section className="section">
            <div className="container">
                <BackButton />
                <Title text="Select ABI Functions" />
                <SendPayments option="Send payments" />
                <SendPayments option="Approve payments" />
                <SendPayments option="Cancel payments" />
            </div>
        </section>
    </Layout>
)