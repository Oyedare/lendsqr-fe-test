"use client"
import Avatar from '@/assets/avatar'
import Star from '@/assets/star'
import '@/styles/styledUserDetails.scss'
import { useState } from 'react'
import GeneralDetails from './generalDetails'

type TabData = {
    id: number,
    category: string
}

const UserDetailsProfile = ({data}:any) => {
    const [selectedTab,setSelectedTab] = useState<string | null | undefined>('General Details')
    
    const tabData: TabData[] = [
        {
            id: 1,
            category: 'General Details'
        },
        {
            id: 2,
            category: 'Documents'
        },
        {
            id: 3,
            category: 'Bank Details'
        },
        {
            id: 4,
            category: 'Loans'
        },
        {
            id: 5,
            category: 'Savings'
        },
        {
            id: 6,
            category: 'App and System'
        },
    ]
  
    return (
    <div className='user-details-profile-container'>
        <div className="user-details-profile-head-container">
            <div className='user-details-profile'>
                <Avatar />
                <div className="name-container flex">
                    <h4>{data.userName}</h4>
                    <p>{data.userId}</p>
                </div>
                <div className="line"></div>
                <div className="user-tier flex">
                    <p>User’s Tier</p>
                    <Star />
                </div>
                <div className="line"></div>
                <div className="account-details flex">
                    <h4>N{data.income}</h4>
                    <p>{data.accountNo}/Providus Bank</p>
                </div>
            </div>

            <div className="tab">
                {tabData.map((item)=>(
                    <div className='tab-item' key={item.id}>
                        <p className={selectedTab === `${item.category}` ? 'active-tab':''} onClick={()=>setSelectedTab(item.category)}>{item.category}</p>
                        <span className={selectedTab === `${item.category}` ? 'bottom-line':''}></span>
                    </div>
                ))}
            </div>
        </div>

        <div className="user-details-profile-body-container">
            <GeneralDetails data = {data}/>
        </div>
    </div>
  )
}

export default UserDetailsProfile