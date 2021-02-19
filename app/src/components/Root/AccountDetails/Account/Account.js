import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearSession } from '#root/store/ducks/session';

const mutation = gql`
    mutation($sessionId: ID!) {
        deleteUserSession(sessionId: $sessionId)
    }
`

const Account = () => {
    const dispatch = useDispatch();
    const [deleteUserSession] = useMutation(mutation);
    const session = useSelector(state => state.session)

    const logout = () => {

    }

    return (
        <div>
            <h1>Account {session.user.email}</h1>
            <button onClick={e => {
                e.preventDefault();
                dispatch(clearSession());
                deleteUserSession({ variables: { sessionId: session.id }});
            }}>Logout</button>
        </div>
    );
}

export default Account;