import Image from 'next/image';
import React from 'react';
import authorImage from '@/public/image/userImage.png'

function UserProfile() {
    return (
        <div className=''>
        {/* userprofile */}
        <div className='userProfile'>
     <div className="userImage">
       <Image src={authorImage} alt="UserImage"/>
     {/* <img alt="UserImage" src={authorImage}  /> */}
   </div>
     <div>
           <h3 >David John </h3>
           <div className='activeStatus'>

           <p className='Checker'>Available</p>
           <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
<circle cx="4" cy="4" r="3.5" fill="#62CC7B" stroke="white" className='statusSvg'/>
</svg>
           </div>
       </div>
       </div>
   </div>
    );
}

export default UserProfile;