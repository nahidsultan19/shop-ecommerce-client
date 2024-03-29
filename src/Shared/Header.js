import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../Components/Home/CartContext';
import auth from '../firebase.init';

const Header = () => {
    const [cart] = useContext(ContextProvider)
    const [user] = useAuthState(auth);

    // cart calculation 
    // const total = cart.reduce((prev, curr) => prev + curr, 0)
    let total = 0;
    for (const product of cart) {
        total = total + product;
    }
    const tax = (total * 10 / 100).toFixed(2);
    const grand = total + parseFloat(tax);

    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/services'>Services</Link></li>
        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}

    </>

    const logout = () => {
        signOut(auth);
    }


    return (
        <div className="navbar bg-gradient-to-r from-orange-500 to-orange-300 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>

                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">SHOP.V</Link>
                <div className='hidden lg:flex'>
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
            </div>
            <div className="navbar-end">
                {user ? `Welcome, ${(user.displayName)}` : ''}
                <div className="dropdown dropdown-end">
                    <label tabIndex="1" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            {cart.length ? (<span className="badge badge-sm indicator-item ">{cart.length}</span>) : ''}
                        </div>
                    </label>
                    <div tabIndex="2" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">{cart.length} Items</span>
                            <span className="text-info">total: $ {total.toFixed(2)}</span>
                            <span className="text-info">Tax: $ {tax}</span>
                            <span className="text-info">Grand Total: $ {grand.toFixed(2)}</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View Item</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user ? (user.photoURL || "https://api.lorem.space/image/face?hash=33791") : ("https://api.lorem.space/image/face?hash=33791")} />
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li>{user ? <a onClick={logout}>Logout</a> : (<Link to='/login' className="cursor-pointer">Login</Link>)}</li>
                    </ul>
                </div>
            </div>

        </div >
    );
};

export default Header;