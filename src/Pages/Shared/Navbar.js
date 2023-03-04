import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Appointment/firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logOut = () => {
        signOut(auth)
    }

    const menuItems = <>
        <li><Link to={'home'}>Home</Link></li>
        <li><Link to={'appointment'}>Appointment</Link></li>
        <li><Link to={'review'}>Review</Link></li>
        <li><Link to={'contact'}>Contact</Link></li>
        <li><Link to={'about'}>About</Link></li>
        {
            user && <li><Link to={'dashboard'}>Dashboard</Link></li>
        }
        <li>{user ? <button class="btn btn-ghost" onClick={logOut}>Sign Out</button> : <Link to={'login'}>Login</Link>}</li>
    </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Doctors Portal</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;