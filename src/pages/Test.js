import React from 'react';
import ArrowBack from '../components/ArrowBack';
import ArrowDown from '../components/ArrowDown';
import ArrowFarward from '../components/ArrowFarward';
import ArrowUp from '../components/ArrowUp';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import Content from '../components/Content';
import Delete from '../components/DeleteTag';
import Dropdown from '../components/Dropdown';
import InputFiled from '../components/InputField';
import InputNumber from '../components/InputNumber';
import Nonce from '../components/Nonce';
import SendPayments from '../components/SendPayments';
import Template from '../components/Template';
import ValueInput from '../components/ValueInput';
import WatchButton from '../components/WatchButton';

export default () => (
    <React.Fragment>
        <ArrowBack />
        <ArrowDown />
        <ArrowUp />
        <ArrowFarward />
        <BackButton />
        <Button />
        <ContactForm />
        <Content />
        <Delete />
        <Dropdown />
        <InputFiled />
        <InputNumber />
        <Nonce />
        <SendPayments />
        <Template />
        <ValueInput />
        <WatchButton />
    </React.Fragment>
)