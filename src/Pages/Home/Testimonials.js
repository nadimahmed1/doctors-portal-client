import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Nadim',
            review: '',
            location: 'Habiganj',
            img: people1
        },
        {
            _id: 2,
            name: 'Nadim',
            review: '',
            location: 'Habiganj',
            img: people2
        },
        {
            _id: 3,
            name: 'Nadim',
            review: '',
            location: 'Habiganj',
            img: people3
        }
    ]
    return (
        <div>
            <div className='flex justify-between my-28'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What our Patients say!</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonials;