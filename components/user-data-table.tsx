"use client"
import ActiveUser from '@/assets/activeUser';
import Blacklist from '@/assets/blacklist';
import Eye from '@/assets/eye';
import FilterIcon from '@/assets/filter';
import VerticalDots from '@/assets/vertical-dots';
import fetchUsers from '@/lib/fetchUsers';
import { Pagination } from '@mui/material';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const UserDataTable = ({ data }:any) => {
    const [filterToggle,setFilterToggle] = useState<boolean>(false)
    const [moreToggle,setMoreToggle] = useState<string | null>(null)

    // useEffect(() => {
    //     const handleClickOutside = () => {
    //         setMoreToggle(null)
    //     };
    
    //     document.addEventListener('mousedown', handleClickOutside);
    
    //     return () => {
    //       document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);
    
    const handleFilterToggle = () =>{
        setFilterToggle(!filterToggle)
    }

    const handleMoreToggle = (id:string) =>{
        setMoreToggle(id)
    }

  return (
    <div className="table-container">
        <table className='user-table-container'>
            <thead>
                <tr className='table-head-row'>
                    <th>
                        <div>
                            Organization <span onClick={handleFilterToggle}><FilterIcon /></span>
                        </div>
                    </th>
                    <th>
                        <div>
                            Username <span onClick={handleFilterToggle}><FilterIcon /></span>
                        </div>
                    </th>
                    <th>
                        <div>
                            Email <span onClick={handleFilterToggle}><FilterIcon /></span>
                        </div>
                    </th>
                    <th>
                        <div>
                            Phone Number <span onClick={handleFilterToggle}><FilterIcon /></span>
                        </div>
                    </th>
                    <th>
                        <div>
                            Date joined <span onClick={handleFilterToggle}><FilterIcon /></span>
                        </div>
                    </th>
                    <th>
                        <div>
                            Status <span onClick={handleFilterToggle}><FilterIcon /></span>
                        </div>
                    </th>
                </tr>
            </thead>

            <tbody>
                {data.map((item: any)=>(
                    <tr key={item.id} className='body-row'>
                        <td>{item.organization}</td>
                        <td>{item.userName}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.dateJoined}</td>
                        <td>
                            <div className="td-btn">
                                {item.status}
                            </div>
                        </td>
                        <td>
                            <div className='vertical-dot-container' onClick={() => {handleMoreToggle(item.id)}}>
                                <span>
                                    <VerticalDots />
                                </span>
                                {moreToggle === item.id &&(
                                    <div onClick={(e)=>{e.stopPropagation()}} className="more-container">
                                        <div className="more-container-item">
                                            <Eye />
                                            <Link href={`/users/${item.id}`}>View Details</Link>
                                        </div>
                                        <div className="more-container-item">
                                            <Blacklist />
                                            <p>Blacklist User</p>
                                        </div>
                                        <div className="more-container-item">
                                            <ActiveUser />
                                            <p>Activate User</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
            
        </table>


        <div className="pagination-container">
            <div className="range-picker">
                <p>Showing</p>
                <input className = 'range-input' type="number" value={data.length} id="data-showing" name="data-showing" min="1" max={data.length}/>
                <p>out of {data.length}</p>
            </div>

            <div className="pagination">
                <Pagination count={100} shape="rounded"/>
            </div>
        </div>

        {filterToggle&&(
            <form className="filter-container">

                <div className="filter-input-container">
                    <label htmlFor="organization">Organization</label>
                    <select name="organization" id="organization" placeholder='Select'>
                        <option value="lendsqr">LendSqr</option>
                        <option value="Ironu">Ironu</option>
                    </select>
                </div>

                <div className="filter-input-container">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='User' />
                </div>

                <div className="filter-input-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Email' />
                </div>

                <div className="filter-input-container">
                    <label htmlFor="date">Date</label>
                    <input type="date" placeholder='Date' />
                </div>

                <div className="filter-input-container">
                    <label htmlFor="phonenumber">Phone Number</label>
                    <input type="phonenumber" placeholder='Phone Number' />
                </div>

                <div className="filter-input-container">
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status" placeholder='Select'>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Pending">Pending</option>
                        <option value="Blacklisted">Blacklisted</option>
                    </select>
                </div>

                <div className="btn-container">
                    <button className='reset-btn'>Reset</button>
                    <button className='filter-btn'>Filter</button>
                </div>
            </form>
        )}

    </div>
  );
};

export default UserDataTable;
