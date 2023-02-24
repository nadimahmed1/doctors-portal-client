import React from 'react';

const InfoCard = ({ img, cardTitles, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl p-5 ${bgClass}`}>
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitles}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default InfoCard;