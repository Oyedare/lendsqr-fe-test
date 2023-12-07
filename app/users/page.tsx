import UsersDashboard from '@/components/users-dashboard'
import '@/styles/styledUsersRoute.scss'

const Users = () => {
  return (
    <div className='users-container'>
        <h4>Users</h4>
        <UsersDashboard />
    </div>
  )
}

export default Users