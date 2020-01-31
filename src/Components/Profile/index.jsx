import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { update, checkEmail } from "../../Actions/userActions";
import snackBarUpdate from "../../Actions/snackBarActions";
import { getAll } from "../../Actions/marriageActions";
import "./index.sass";

export default function Profile() {
  const { handleSubmit, register, errors, setValue } = useForm();
  const { id, username, email, age, marriages_id } = useSelector(
    state => state.loginReducer.user
  );
  const { marriages } = useSelector(state => state.marriageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
    setValue("username", username);
    setValue("email", email);
    setValue("age", age);
    setValue("marriages_id", marriages_id);
  }, []);

  const onSubmit = form => {
    dispatch(checkEmail(form.email)).then(({ data }) => {
      if (data && email !== form.email) {
        dispatch(snackBarUpdate({
            payload: {
                message: 'Email exist!',
                type: 'error',
                status: true,
            },
        }))
      } else {
        dispatch(update({ id, ...form }));
      }
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-container__title">Profile</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="profile-container__field">
          <div className="profile-container__field-title">Email</div>
          <div className="profile-container__field-input">
            <input
              name="email"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address"
                }
              })}
            />
            {errors.email && errors.email.message}
          </div>
        </div>
        <div className="profile-container__field">
          <div className="profile-container__field-title">Username</div>
          <div className="profile-container__field-input">
            <input
              name="username"
              ref={register({
                required: "Required"
              })}
              type="text"
            />
            {errors.username && errors.username.message}
          </div>
        </div>
        <div className="profile-container__field">
          <div className="profile-container__field-title">Age</div>
          <div className="profile-container__field-input">
            <input
              name="age"
              ref={register({
                required: "Required"
              })}
              type="text"
            />
            {errors.age && errors.age.message}
          </div>
        </div>
        <div className="profile-container__field">
          <div className="profile-container__field-title">Marriage</div>
          <div className="profile-container__field-input">
            <select ref={register} name="marriages_id">
              {marriages.map((element, index) => (
                <option key={index} value={element.id}>
                  {element.description}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="profile-container__button">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}
