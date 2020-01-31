import React from 'react';
import './index.sass';

export default function PopeFrancis() {
    return (
        <div className="pope-francis-container">
            <div className="pope-francis-container__box">
                <div className="pope-francis-container__block">
                    <p className="pope-francis-container__text-opinion">What's your opinion on</p>
                    <p className="pope-francis-container__text-pope">Pope Francis?</p>
                    <p className="pope-francis-container__text-comment">He’s talking tough on clergy sexual abuse</p>
                    <p>but is he just another papal pervert</p>
                    <p>protector? (thumbs down) or a true</p>
                    <p>pedophile punishing pontiff?</p>
                </div>
                <div className="pope-francis-container__more-information">
                    <div className="pope-francis-container__logo"><div /></div>
                    <div className="pope-francis-container__info">More information</div>
                </div>
                <div className="pope-francis-container__text-verdict">
                    What's Your Verdict?
        </div>
            </div>
            <div className="pope-francis-container__vote-box">
                <div className="pope-francis-container__yes" ><div /></div>
                <div className="pope-francis-container__no" > <div /> </div>
            </div>
        </div>
    )
}