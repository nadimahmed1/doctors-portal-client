import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { coolGray } from 'tailwindcss/colors';
import auth from './firebase.init';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading] = useAuthState(auth);
    const handleForm = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(name, slot);
        const formattedDate = format(date, 'PP');

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`);
                }
                else {
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.date}`)
                }
                refetch();
                setTreatment(null)
            })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <form onSubmit={handleForm} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-lg text-secondary font-bold">Congratulations!! Booking for: {name}</h3>
                        <input type="text" disabled value={format(date, 'PPP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />

                        <input type="submit" value={'Submit'} class="btn btn-secondary input input-bordered w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;