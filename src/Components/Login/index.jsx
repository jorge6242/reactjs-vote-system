import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { login } from '../../Actions/loginActions';
import './index.sass';

export default function Login() {
    const { handleSubmit, register, errors } = useForm();
    const dispatch = useDispatch();
    
    const onSubmit = values => {
        dispatch(login(values))
    };

    return (
        <div className="login-container">
            <div className="login-container__title">Login</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="login-container__field">
                    <div className="login-container__field-title">
                        Email
                    </div>
                    <div className="login-container__field-input">
                        <input
                            name="email"
                            ref={register({
                                required: 'Required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address"
                                }
                            })}
                        />
                        {errors.email && errors.email.message}
                    </div>
                </div>

                <div className="login-container__field">
                    <div className="login-container__field-title">
                        Password
                    </div>
                    <div className="login-container__field-input">
                        <input
                            name="password"
                            ref={register({
                                required: 'Required',
                            })}
                            type="password"
                        />
                        {errors.password && errors.password.message}
                    </div>
                </div>
                <div className="login-container__button"><button type="submit">Submit</button></div>
            </form>
        </div>

    );
};