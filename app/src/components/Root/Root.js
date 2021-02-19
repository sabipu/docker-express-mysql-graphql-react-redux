import gql from 'graphql-tag';
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


import graphqlClient from "#root/api/graphqlClient";
import { setSession } from "#root/store/ducks/session";

import AccountDetails from "./AccountDetails";

const query = gql`
    {
        userSession(me: true) {
            id
            user {
                id
                email
            }
        }
    }
`;



const Root = () => {
    const dispatch = useDispatch();
    const [initialised, setInitialised] = useState(false);

    useEffect(() => {
        graphqlClient.query({ query }).then(({ data }) => {
            if(data.userSession) {
                dispatch(setSession(data.userSession));
            }
            setInitialised(true);
        })
    }, []);

    if(!initialised) return "Loading...";

    return <AccountDetails />
}

export default Root;