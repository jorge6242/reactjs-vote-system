import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./index.sass";
import Like from "../Like";
import { createCandidateVote } from "../../Actions/candidateActions";
const images = require.context("../../Styles/Images/", true);

export default function Candidate({
  candidate: {
    id,
    image,
    name,
    description,
    category,
    percentageYes,
    percentageNo
  }
}) {
  const [vote, setVote] = useState(null);
  const [candidate, setCandidate] = useState(null);
  const [votingDone, setVotingDone] = useState(false);
  const dispatch = useDispatch();
  const statusLogin = useSelector(state => state.loginReducer.status);

  let widthYes = percentageYes;
  let widthNo = percentageNo;
  if (percentageYes === 0 && percentageNo === 0) {
    widthYes = 15;
    widthNo = 15;
  }

  const handleSelect = (candidate, vote) => {
    setCandidate(candidate);
    setVote(vote);
  };

  const handleVote = () => {
    if (!votingDone && vote !== null) {
      dispatch(
        createCandidateVote({
          candidate,
          vote
        })
      );
      if(statusLogin) setVotingDone(true);
    } else {
      setVotingDone(false);
      setVote(null);
    }
  };

  return (
    <div
      className="candidate-container"
      style={{ backgroundImage: `url(${images(`./${image}`)})` }}
    >
      <div className="candidate-container__layer" />
      <div className="cantidate-container__box">
        <div className="cantidate-container__body">
          <div className="cantidate-container__like">
            <Like type={"no"} />
          </div>
          <div className="cantidate-container__detail">
            <p className="cantidate-container__title">{name}</p>
            <p className="cantidate-container__sub-title">
              <strong>1 Month ago</strong> in {category.description}
            </p>
            <p className="cantidate-container__description">{ votingDone ? 'Thank you for voting!' : description}</p>
            <div className="cantidate-container__buttons">
              {!votingDone && (
                <React.Fragment>
                  <div
                    className="cantidate-container__button-select"
                    onClick={() => handleSelect(id, 1)}
                  >
                    <Like type={"yes"} active={vote === 1 ? "active" : ""} />
                  </div>
                  <div
                    className="cantidate-container__button-select"
                    onClick={() => handleSelect(id, 0)}
                  >
                    <Like type={"no"} active={vote === 0 ? "active" : ""} />
                  </div>
                </React.Fragment>
              )}
              <div
                className="cantidate-container__vote-button"
                onClick={() => handleVote()}
              >
                {votingDone ? "Vote again" : "Vote Now"}
              </div>
            </div>
          </div>
        </div>
        <div className="cantidate-container__vote-box">
          <div
            className="cantidate-container__yes"
            style={{ width: `${widthYes}%` }}
          >
            <div className="cantidate-container__icon-yes" />
            <div className="cantidate-container__percent">{percentageYes}%</div>
          </div>
          <div
            className="cantidate-container__no"
            style={{ width: `${widthNo}%` }}
          >
            <div className="cantidate-container__percent">{percentageNo}%</div>
            <div className="cantidate-container__icon-no" />
          </div>
        </div>
      </div>
    </div>
  );
}
