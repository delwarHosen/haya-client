import React, { useContext } from 'react';
import {FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import useCarts from '../../../hooks/useCarts';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCarts()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><a>Contact</a></li>
        <li><a>Review</a></li>
        <li><Link to='/secret'>Secret</Link></li>
    </>

    return (
        <div className='fixed w-full z-10 '>
            <div className="navbar bg-gradient-to-r from-[#C384BB] to-[#B750F7]">
                <div className="flex-1 md:ml-20">
                    <a className="btn btn-ghost text-2xl text-white font-semibold">Haya</a>
                </div>
                <div className="flex-none gap-2 md:mr-20">
                    <div className="form-control md:mr-8">
                        <input type="text" placeholder="Search your product" className="input input-bordered w-40 md:w-auto" />
                    </div>
                    <div className='flex md:mr-6 mr-6'>
                        {/* <FaRegHeart className='md:h-8 h-4 md:w-8 w-4 mr-1 text-white'></FaRegHeart><span className='md:text-xl text-sm text-white font-semibold'>Wishlist</span> */}
                        {/* <FaSearch></FaSearch> */}
                        <Link to='/dashboard/cart' className='flex'>
                            <FaShoppingCart className='md:h-8 h-4 md:w-8 w-4 text-white'></FaShoppingCart>
                            <div className="badge badge-secondary ml-1">+{cart.length}</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="navbar bg-gradient-to-r from-[#7B034B] to-[#F70395]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white md:ml-20">All Product</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end md:mr-20 mr-4">
                    {
                        user ?
                            <> <span className='text-white font-semibold mr-2'>{user?.displayName}</span>
                                <Link onClick={handleLogOut} className='text-white font-bold text-xl' to='/login'>LogOut</Link></>
                            : <Link className='text-white font-bold text-xl' to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;





