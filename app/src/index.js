import React from 'react';
import "@babel/polyfill";
import { ApolloProvider } from "react-apollo";
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from "./store";

import Root from "#root/components/Root";
import graphqlClient from "#root/api/graphqlClient";

render(
    <Provider store={store}>
        <ApolloProvider client={graphqlClient}>
            <Root />
        </ApolloProvider>
    </Provider>
,document.getElementById("app"));