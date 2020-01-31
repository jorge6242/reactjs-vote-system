import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Candidate from "../../Components/Candidate";
import { getAll } from "../../Actions/candidateActions";
import "./index.sass";

export default function Main() {
  const dispatch = useDispatch();
  const candidates = useSelector(state => state.candidateReducer.candidates);

  useEffect(() => {
    function run() {
      dispatch(getAll());
    }
    run();
  }, [dispatch]);

  return (
    <div className="main-container">
      <div className="main-container__comment-box">
        <div className="main-container__colum-1">
          <p className="main-container__text1">Speak out. Be heard.</p>
          <p className="main-container__text2">Be counted</p>
        </div>
        <div className="main-container__colum-2">
          <p>
            Rule of Thumb is a crowd sourced court of public opinion where
            anyone and everyone can speak out and speak
          </p>
          <p>
            freely. It's easy: You share your opinion, we analize and put the
            data in a public report.
          </p>
        </div>
        <div className="main-container__colum-3" />
      </div>
      <div className="main-container__vote-container">
        <div className="main-container__vote-container-title">Vote</div>
        <div className="main-container__vote-list">
          {candidates.length > 0 &&
            candidates.map((item, index) => (
              <Candidate candidate={item} key={index}/>
            ))}
        </div>
      </div>
      <div className="main-container__add-cantidate">
        <div className="main-container__add-cantidate-layer" />
        <div className="main-container__add-cantidate-text">
          <p>Is there anyone else you would want us to add?</p>
        </div>
        <div className="main-container__add-cantidate-button">
          <button>Submit Name</button>
        </div>
      </div>
    </div>
  );
}
