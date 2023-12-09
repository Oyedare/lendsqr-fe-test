import UserDataTable from '@/components/user-data-table'
import UsersDashboard from '@/components/users-dashboard'
import fetchUsers from '@/lib/fetchUsers'
import '@/styles/styledUsersRoute.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Users',
}

const Users = async() => {
  const usersData: Promise<Users[]>  = fetchUsers()
  const data = await usersData
  
  return (
    <div className='users-container'>
      <h4>Users</h4>
      <UsersDashboard />
      <UserDataTable data = {data}/>
    </div>
  )
}

export default Users