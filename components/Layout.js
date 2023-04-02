/* eslint-disable react/display-name */
import React from 'react';
import Header from './Header';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';

export default (props) =>{
    return(
        <Container>

        <Header/>
        {props.children}            
    </Container>
    );
};