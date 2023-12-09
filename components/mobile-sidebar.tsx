"use client"
import BriefCaseIcon from '@/assets/brief-case'
import HomeIcon from '@/assets/home'
import ThinDropdownIcon from '@/assets/thin-dropdown'
import React from 'react'
import '@/styles/styledSidebar.scss'
import { LinkData } from '@/data/sidebar-links'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const MobileSidebar = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className='mobile-sidebar-container'>
      <div className="top-nav-links">
        <div className="nav-link">
          <BriefCaseIcon />
          <h5>Switch Organization</h5>
          <ThinDropdownIcon />
        </div>

        <div className="nav-link">
          <HomeIcon />
          <h5>Dashboard</h5>
        </div>
      </div>

      {LinkData.map((item)=>(
        <div key={item.id} className="nav-links">
          <h4>{item.linkTitle}</h4>

          <div className="nav-link-container">
            {item.subLink.map((link,i)=>(
              <div onClick={()=>router.push(`${link.href}`)} key={i} className={`nav-link ${pathname === link.href && "active"}`}>
                <link.icon />
                <h5>{link.title}</h5>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default MobileSidebar