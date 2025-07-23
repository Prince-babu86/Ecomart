import React from 'react'
import ProfileMenu from '../components/profile/ProfileMenu'
import ProfileMenuHorizontal from '../components/profile/ProfileMenuHorizontal'
import ProfileRoutes from '../routes/ProfileRoutes'
import { useData } from '../context/DataContext'
import { Navigate } from 'react-router-dom'

const Profile = () => {
  let {loggeduser} =  useData()
  return (
   <>
   {loggeduser ?  <div className='w-full flex gap-4 z-[100]'>
     <div className='menubar_mobile hidden'> <ProfileMenuHorizontal/></div>
        <ProfileMenu/>
       <div className='profile_routes ml-72  w-full z-[100] bg-white h-[80vh]'> 
         <ProfileRoutes/>
       </div>
        
    </div> : <Navigate to={`/login`}/>}
   </>
  )
}

export default Profile