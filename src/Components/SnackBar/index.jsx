import React from "react";
import { useSelector, useDispatch } from "react-redux";

import snackBarUpdate from "../../Actions/snackBarActions";
import "./index.sass";

export default function SnackBar() {
  const dispatch = useDispatch();
  const status = useSelector(state => state.snackBarReducer.status);
  const message = useSelector(state => state.snackBarReducer.message);
  const type = useSelector(state => state.snackBarReducer.type);
  const typeMessage = type === "" ? "" : `snackbar--${type}`;

  const handleClose = () => {
    dispatch(
      snackBarUpdate({
        payload: {
          message: "",
          status: false,
          type: ""
        }
      })
    );
  };

  return (
    <div
      className={`snackbar ${status ? "snackbar--show" : ""} ${typeMessage}`}
    >
      <div className="snackbar__body">
        <div className="snackbar__message">{message}</div>
        <div className="snackbar__close-icon" onClick={() => handleClose()}>X</div>
      </div>
    </div>
  );
}
