'use client'

import Link from 'next/link';
import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import UserList from '../UserList/UserList';
import { usePathname } from 'next/navigation';


export const chats = [
    {
        _id: 1,
        image: "https://i.ibb.co/Yk2LzSZ/Mask-group.png",
        img_bg: "#9908F5",
        name: "Engineer’s Group",
        member: "10K member",
        time: "10:30 AM"
    },
    {
        _id: 2,
        image: "https://i.ibb.co/3NfY0ZZ/user2.png",
        name: "FG",
        HexCode: "#54326",
        videoText: "SR sent a video",
        time: "Yesterday",
        message: "5"
    },
    {
        _id: 3,
        image: "https://i.ibb.co/Kwbfs1c/Mask-group-2.png",
        img_bg: "#08F5CA",
        name: "Doctor’s Group",
        member: "1K member",
        time: "Yesterday"
    },
    {
        _id: 4,
        image: "https://i.ibb.co/nzPW0zB/user4.png",
        name: "AR",
        HexCode: "#54326",
        Text: "Hey, I am here...",
        time: "12 Nov, 2023",
        bg: "#FFFFFF"

    },
    {
        _id: 5,
        image: "https://i.ibb.co/3NfY0ZZ/user2.png",
        name: "FG",
        HexCode: "#54326",
        videoText: "SR sent a video",
        time: "2 Nov, 2023",
        message: "5"
    },
    {
        _id: 6,
        image: "https://i.ibb.co/19FFC1Z/dollar-sign-1.png",
        img_bg: "#00C12A",
        name: "Millionaire’s Group",
        member: "500 member",
        time: "2 Nov, 2023"
    },
    {
        _id: 7,
        image: "https://i.ibb.co/cgf3sZ4/user8.png",
        name: "AR",
        HexCode: "#54326",
        videoText: "AR sent a video",
        time: "2 Nov, 2023",
        message: "2"
    },
    {
        _id: 8,
        image: "https://i.ibb.co/427n1gB/user9.png",
        name: "JK",
        HexCode: "#54326",
        Text: "Hey, I am here...",
        time: "01 Nov, 2023",

    },
    {
        _id: 9,
        image: "https://i.ibb.co/427n1gB/user9.png",
        name: "FG",
        HexCode: "#54326",
        videoText: "SR sent a video",
        time: "01 Nov, 2023",
        message: "5"
    },
    {
        _id: 10,
        image: "https://i.ibb.co/427n1gB/user9.png",
        name: "PR",
        HexCode: "#54326",
        Text: "Hey, I am here...",
        time: "4 Nov, 2023",

    },
]
function Sidebar() {
    const pathname = usePathname();

    return (
        <div className={`${pathname === '/chat' ? 'sidebar' : 'sidebar sidebarResponsive'}`}>
            <UserProfile></UserProfile>
            {/* search and filter */}
            <div className='searchFilter'>
                {/* search button */}

                <div className='search'>
                    <h4 className='searchContent'>Search...</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className=' searchIcon'>
                        <g clipPath="url(#clip0_1692_7087)">
                            <path d="M14.6654 14.6654L13.332 13.332M7.66536 13.9987C8.49707 13.9987 9.32063 13.8349 10.089 13.5166C10.8574 13.1983 11.5556 12.7318 12.1437 12.1437C12.7318 11.5556 13.1983 10.8574 13.5166 10.089C13.8349 9.32063 13.9987 8.49707 13.9987 7.66536C13.9987 6.83366 13.8349 6.0101 13.5166 5.2417C13.1983 4.47331 12.7318 3.77513 12.1437 3.18702C11.5556 2.59892 10.8574 2.13241 10.089 1.81413C9.32063 1.49585 8.49707 1.33203 7.66536 1.33203C5.98566 1.33203 4.37475 1.99929 3.18702 3.18702C1.99929 4.37475 1.33203 5.98566 1.33203 7.66536C1.33203 9.34507 1.99929 10.956 3.18702 12.1437C4.37475 13.3314 5.98566 13.9987 7.66536 13.9987V13.9987Z" stroke="#636363" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1692_7087">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                {/* Filter */}
                <div className='filter' >
                    <div className=' filterContent'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14.6654 2H1.33203L6.66536 8.30667V12.6667L9.33203 14V8.30667L14.6654 2Z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className='filterbtn'>Filter</p>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
            {/* user show through mapping */}
            {
                chats.map(item => {
                    return <UserList key={item._id} items={item}></UserList>;
                })

            }

        </div>
    );
}

export default Sidebar;