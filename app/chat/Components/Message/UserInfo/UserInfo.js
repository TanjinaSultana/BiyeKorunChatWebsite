
import Image from 'next/image';
import React from 'react';
import volume from '@/public/image/volume-high.png'

function UserInfo({ item ,isSidebarOpen}) {
    const { _id, image, name, HexCode } = item;
    return (
        <div  className={`user-info ${isSidebarOpen ? 'open' : ''}`}>
            <div className='chatInfo'>
                <h3>Chat Info</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <g filter="url(#filter0_b_0_1784)">
                        <circle cx="17" cy="17" r="17" fill="black" fill-opacity="0.1" />
                    </g>
                    <path d="M21.76 12.92L12.92 21.76" stroke="black" stroke-width="3" stroke-linecap="round" />
                    <path d="M21.7601 21.7602L12.9201 12.9202" stroke="black" stroke-width="3" stroke-linecap="round" />
                    <defs>
                        <filter id="filter0_b_0_1784" x="-4" y="-4" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1784" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_1784" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className='userImage'>
                <Image src={image} width={321} height={250} />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.0399 3.01928L8.15988 10.8993C7.85988 11.1993 7.55988 11.7893 7.49988 12.2193L7.06988 15.2293C6.90988 16.3193 7.67988 17.0793 8.76988 16.9293L11.7799 16.4993C12.1999 16.4393 12.7899 16.1393 13.0999 15.8393L20.9799 7.95928C22.3399 6.59928 22.9799 5.01928 20.9799 3.01928C18.9799 1.01928 17.3999 1.65928 16.0399 3.01928Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.9102 4.15039C15.5802 6.54039 17.4502 8.41039 19.8502 9.09039" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            <div className='userDetails'>
                <div className='userName'>

                    <h3>{name}</h3>
                    <p>{HexCode}</p>
                </div>
                <div className='Online'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <circle cx="6.88235" cy="6.88235" r="6.38235" fill="#62CC7B" stroke="white"/>
</svg>
<p>Online</p>
                </div>

            </div>
            <div className='notification  '>
             <div>
                <Image src={volume} width={20} height={20}/>
                <p>Notification</p>
             </div>
             <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
  <rect width="38" height="19.5278" rx="9.76389" fill="#9908F5"/>
  <circle cx="9.76259" cy="9.76454" r="8.18056" fill="white"/>
</svg>
            </div>
            <hr></hr>
            <div className='description'>
                <h2>Description</h2>
                <p>Hi there! I’m using this app long time.</p>

            </div>
            <hr></hr>
            <div className='gallery'>
                <h5>Images</h5>
                <h5>Voice</h5>
            </div>
        </div>
    );
}

export default UserInfo;