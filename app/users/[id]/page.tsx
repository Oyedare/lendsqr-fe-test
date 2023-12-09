import BackBtn from "@/assets/back-btn"
import UserDetailsProfile from "@/components/user-details-profile"
import fetchSingleUser from "@/lib/fetchSingleUser"
import '@/styles/styledUserDetails.scss'
import Link from "next/link"

type Params = {
    params: {
        id: string
    }
}
const UserDetails = async({params : {id}}: Params) => {
  
  const userDetailsData:Promise<Users> = fetchSingleUser(id)
  const data = await userDetailsData

  return (
    <div className="user-details-container">
      <div className="back-btn">
        <BackBtn />
        <Link href='/users'>Back to Users</Link>
      </div>

      <div className="user-details-container-head">
        <h3 className="title">User Details</h3>
        <div className="btn-container">
          <button className="blacklist">Blacklist User</button>
          <button className="activate">Activate User</button>
        </div>
      </div>

      <UserDetailsProfile data={data}/>
    </div>
  )
}

export default UserDetails