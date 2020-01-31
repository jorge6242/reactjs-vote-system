import React from 'react';
import "./index.sass";

export default function Like({ type = 'yes', active }) {

    return (<div className={`like-container like-container--${type} like-container--${active}`}>
        <div className="like-container__like-icon" />
    </div>)
}