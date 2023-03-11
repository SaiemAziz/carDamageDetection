import React from 'react';
import { Outlet, Link } from "react-router-dom"

const Main = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <header className='flex justify-center bg-base-200 p-5 items-center gap-10 mb-10'>
                <Link to="/check-plate">Plate</Link>
                <Link to="/check-damage">Damage</Link>
            </header>
            <Outlet />
        </div>
    );
};

export default Main;