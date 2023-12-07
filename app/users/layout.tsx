import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import React from 'react'

export default function AppLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  
    return (
        <>
            <Navbar />
            <div className="layout-flex">
                <Sidebar />
                {children}
            </div>
        </>
    )
}
