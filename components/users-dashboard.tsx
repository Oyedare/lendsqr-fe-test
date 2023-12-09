import React from 'react'
import '@/styles/styledUsersRoute.scss'
import PinkUserIcon from '@/assets/pink-users'
import PurpleUsersIcon from '@/assets/purple-users'
import OrangeDocIcon from '@/assets/orange-doc'
import RedCoinIcon from '@/assets/red-coin'
import fetchDashboard from '@/lib/fetchDashboard'

const UsersDashboard = async() => {
    const dashboardData: Promise<UserDashboard[]>  = fetchDashboard()
    const data = await dashboardData
    
  return (
    <>
        {data?.map(data => (
            <div key={data.id} className='user-dashboard-container'>
                <div className="card">
                    <PinkUserIcon />
                    <h5>Users</h5>
                    <p>{data.totalUsers}</p>
                </div>

                <div className="card">
                    <PurpleUsersIcon />
                    <h5>Active Users</h5>
                    <p>{data.activeUsers}</p>
                </div>

                <div className="card">
                    <OrangeDocIcon />
                    <h5>Users with Loans</h5>
                    <p>{data.loanUsers}</p>
                </div>

                <div className="card">
                    <RedCoinIcon />
                    <h5>Users with Savings</h5>
                    <p>{data.savingUsers}</p>
                </div>
            </div>
        ))}
    </>
  )
}

export default UsersDashboard