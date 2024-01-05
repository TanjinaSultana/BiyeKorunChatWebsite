import React from 'react';
import img from '@/public/image/user4.png'
import Image from 'next/image';

function Message() {
    return (
        <div>
               <Image src={img} alt='userImage' className='img'></Image>
               <div>
                <h3 className='heading'>AR</h3>
                <div className='msgBox'>
                <svg xmlns="http://www.w3.org/2000/svg" width="232" height="73" viewBox="0 0 232 73" fill="none">
  <path d="M0 10C0 4.47715 4.47715 0 10 0H220C226.627 0 232 5.37258 232 12V61C232 67.6274 226.627 73 220 73H20C8.95431 73 0 64.0457 0 53V10Z" fill="white"/>
</svg> 
                    <p className='msg'>Hi <span>@All</span></p>
                    <div className='inbox'>

                    <p >How are you?</p>
                    <p>10:30 AM</p>
                    </div>
                </div>
               </div>
        </div>
    );
}

export default Message;