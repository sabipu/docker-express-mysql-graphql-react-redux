import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "React";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { setSession } from "#root/store/ducks/session";

const mutation = gql`
    mutation($email: String!, $password: String!) {
        createUserSession(email: $email,password: $password) {
            id
            user {
                email
                id
            }
        }
    }
`;

const Login = () => {
    const dispatch = useDispatch();
    const [createUserSession] = useMutation(mutation);

    const {
        formState: { isSubmitting },
        handleSubmit,
        register
    } = useForm();



    const onSubmit = handleSubmit(async ({ email, password }) => {
        const {
            data: {
                createUserSession: createdSession
            }
        } = await createUserSession({ variables: {email, password}});

        dispatch(setSession(createdSession));
    })

    return (
        <div className="form__wrapper">
            <h1>Login Form</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="email" name="email" disabled={isSubmitting} ref={register} />
                </div>
                <div>
                    <input type="password" name="password" disabled={isSubmitting} ref={register} />
                </div>
                <input type="submit" disabled={isSubmitting} />
            </form>
        </div>
    )
}

export default Login;