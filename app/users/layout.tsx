"use client"
import MobileSidebar from '@/components/mobile-sidebar'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import React,{useState} from 'react'

export default function AppLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const [showSidebar,setShowSidebar] = useState<boolean>(false)
  
    return (
        <>
            <Navbar showSidebar = {showSidebar} setShowSidebar = {setShowSidebar}/>
            <div className="layout-flex">
              {showSidebar&&(
                <MobileSidebar />
              )}
              <Sidebar />
              {children}
            </div>
        </>
    )
}
