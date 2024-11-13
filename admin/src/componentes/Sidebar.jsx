import React from 'react';
import { NavLink } from "react-router-dom";
import { assets } from '../assets/admin_assets/assets';

const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-2'>
            <div className='flex flex-col py-5 px-[10%] gap-4'>
                <NavLink className='px-3 py-2 flex border border-grey-500 border-r-0 items-center gap-3' to="/add">
                    <img src={assets.add_icon} alt="Add Icon" />
                    <p className='hidden md:block'>Add Items</p>
                </NavLink>
                <NavLink className='px-3 py-2 flex border border-grey-500 border-r-0 items-center gap-3' to="/orders">
                    <img src={assets.order_icon} alt="Order Icon" />
                    <p className='hidden md:block'>Orders</p>
                </NavLink>
                <NavLink className='px-3 py-2 flex border border-grey-500 border-r-0 items-center gap-3' to="/list">
                    <img src={assets.order_icon} alt="Settings Icon" />
                    <p className='hidden md:block'>List</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
