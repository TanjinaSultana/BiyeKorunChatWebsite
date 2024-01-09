import Image from 'next/image';
import React, { useState } from 'react';
import volume from '@/public/image/volume-high.png'
import search from '@/public/image/search-normal.png';
import userAdd from '@/public/image/user-add.png';
import UserInfo from '../UserInfo/UserInfo';



function Header({ items }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const { _id, image, name, HexCode } = items;
    return (
        <div className='header'>
            {/* userProfile */}
            <div className='user'>
                <div className='list' onClick={handleToggleSidebar}>

                    <Image src={image} alt='userImage' className='img' width={36} height={36}></Image>
                    <div>
                        <div className='name'>

                            <h2 className='userName'>{name}</h2>
                            <p className='hexcode'>{HexCode}</p>
                        </div>
                        <p className='online'>Online</p>
                    </div>
                </div>
             <UserInfo item ={items} isSidebarOpen={isSidebarOpen}></UserInfo>
            </div>
            {/* icons */}
            <div className='icon'>
                {/* call */}
                <div className='icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='svgicon'>
                        <path d="M1.875 5.625C1.875 12.5283 7.47167 18.125 14.375 18.125H16.25C16.7473 18.125 17.2242 17.9275 17.5758 17.5758C17.9275 17.2242 18.125 16.7473 18.125 16.25V15.1067C18.125 14.6767 17.8325 14.3017 17.415 14.1975L13.7292 13.2758C13.3625 13.1842 12.9775 13.3217 12.7517 13.6233L11.9433 14.7008C11.7083 15.0142 11.3025 15.1525 10.935 15.0175C9.57073 14.5159 8.33179 13.7238 7.30398 12.696C6.27618 11.6682 5.48406 10.4293 4.9825 9.065C4.8475 8.6975 4.98583 8.29167 5.29917 8.05667L6.37667 7.24833C6.67917 7.0225 6.81583 6.63667 6.72417 6.27083L5.8025 2.585C5.75178 2.38225 5.63477 2.20225 5.47004 2.07361C5.30532 1.94498 5.10234 1.87507 4.89333 1.875H3.75C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V5.625Z" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {/* vedio */}
                <div className='icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='svgicon'>
                        <path d="M13.125 8.75L17.0583 4.81667C17.1457 4.72937 17.2571 4.66993 17.3782 4.64586C17.4994 4.62179 17.625 4.63417 17.7391 4.68143C17.8532 4.72869 17.9508 4.80871 18.0195 4.91139C18.0882 5.01407 18.1249 5.1348 18.125 5.25833V14.7417C18.1249 14.8652 18.0882 14.9859 18.0195 15.0886C17.9508 15.1913 17.8532 15.2713 17.7391 15.3186C17.625 15.3658 17.4994 15.3782 17.3782 15.3541C17.2571 15.3301 17.1457 15.2706 17.0583 15.1833L13.125 11.25M3.75 15.625H11.25C11.7473 15.625 12.2242 15.4275 12.5758 15.0758C12.9275 14.7242 13.125 14.2473 13.125 13.75V6.25C13.125 5.75272 12.9275 5.27581 12.5758 4.92417C12.2242 4.57254 11.7473 4.375 11.25 4.375H3.75C3.25272 4.375 2.77581 4.57254 2.42417 4.92417C2.07254 5.27581 1.875 5.75272 1.875 6.25V13.75C1.875 14.2473 2.07254 14.7242 2.42417 15.0758C2.77581 15.4275 3.25272 15.625 3.75 15.625V15.625Z" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>
                {/* delete */}
                <div className='icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='svgicon'>
                        <path d="M12.2833 7.50044L11.995 15.0004M8.005 15.0004L7.71667 7.50044M16.0233 4.82543C16.3083 4.86877 16.5917 4.9146 16.875 4.96377M16.0233 4.82627L15.1333 16.3946C15.097 16.8656 14.8842 17.3056 14.5375 17.6265C14.1908 17.9474 13.7358 18.1256 13.2633 18.1254H6.73667C6.26425 18.1256 5.80919 17.9474 5.46248 17.6265C5.11578 17.3056 4.90299 16.8656 4.86667 16.3946L3.97667 4.82543M16.0233 4.82543C15.0616 4.68003 14.0948 4.56968 13.125 4.4946M3.125 4.96293C3.40833 4.91377 3.69167 4.86793 3.97667 4.82543M3.97667 4.82543C4.93844 4.68003 5.9052 4.56968 6.875 4.4946M13.125 4.4946V3.73127C13.125 2.74793 12.3667 1.92793 11.3833 1.8971C10.4613 1.86763 9.53865 1.86763 8.61667 1.8971C7.63333 1.92793 6.875 2.74877 6.875 3.73127V4.4946M13.125 4.4946C11.0448 4.33383 8.95523 4.33383 6.875 4.4946" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* more */}
                <div className='dropdown'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none" className="dropdown-button">
                        <rect width="38" height="38" rx="5" fill="black" fillOpacity="0.05" />
                        <circle cx="19" cy="12" r="2" fill="black" fillOpacity="0.6" />
                        <circle cx="19" cy="19" r="2" fill="black" fillOpacity="0.6" />
                        <circle cx="19" cy="26" r="2" fill="black" fillOpacity="0.6" />
                    </svg>


                    <div class="dropdown-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none" className='arrow'>
                            <path d="M0.749999 14.433C0.416666 14.2406 0.416666 13.7594 0.749999 13.567L23.25 0.576604C23.5833 0.384154 24 0.624717 24 1.00962L24 26.9904C24 27.3753 23.5833 27.6158 23.25 27.4234L0.749999 14.433Z" fill="#F5F5F5" />
                        </svg>
                        <div class="dropdown-item">
                            <Image src={volume} width={18} height={18}></Image>
                            <a href="#" >Mute Notification</a>
                        </div>
                        <div class="dropdown-item">
                            <Image src={search} width={18} height={18}></Image>
                            <a href="#" >Search</a>
                        </div>
                        <div class="dropdown-item">
                            <Image src={userAdd} width={18} height={18}></Image>
                            <a href="#" >Share my contact</a>
                        </div>
                        <div className='dropdown-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M8.19976 1H6.59976C2.59976 1 0.999756 2.6 0.999756 6.6V11.4C0.999756 15.4 2.59976 17 6.59976 17H11.3998C15.3998 17 16.9998 15.4 16.9998 11.4V9.8" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.9283 2.24818C15.9443 4.70418 13.4723 8.04818 11.4083 9.70418L10.1443 10.7122C9.98432 10.8322 9.82432 10.9282 9.64032 11.0002C9.64032 10.8802 9.63232 10.7602 9.61632 10.6322C9.54432 10.0962 9.30432 9.59218 8.87232 9.16818C8.43232 8.72818 7.90432 8.48018 7.36032 8.40818C7.23232 8.40018 7.10432 8.39218 6.97632 8.40018C7.04832 8.20018 7.15232 8.01618 7.28832 7.86418L8.29632 6.60018C9.95232 4.53618 13.3043 2.04818 15.7523 1.06418C16.1283 0.920176 16.4963 1.03218 16.7283 1.26418C16.9683 1.50418 17.0803 1.87218 16.9283 2.24818Z" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.64649 10.992C9.64649 11.696 9.37449 12.368 8.87049 12.88C8.47849 13.272 7.95049 13.544 7.31849 13.624L5.74249 13.792C4.88649 13.888 4.15049 13.16 4.24649 12.288L4.41449 10.712C4.56649 9.31199 5.73449 8.41599 6.98249 8.39199C7.11049 8.38399 7.23849 8.39199 7.36649 8.39999C7.91049 8.47199 8.43849 8.71999 8.87849 9.15999C9.31049 9.59199 9.55049 10.088 9.62249 10.624C9.63849 10.752 9.64649 10.88 9.64649 10.992Z" stroke="#666666" stroke-width="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.0786 8.98512C12.0786 7.31312 10.7266 5.95312 9.04663 5.95312" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <a href="#">Clear History</a>
                        </div>
                        <div className='dropdown-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M12.2831 7.50044L11.9948 15.0004M8.00476 15.0004L7.71642 7.50044M16.0231 4.82543C16.3081 4.86877 16.5914 4.9146 16.8748 4.96377M16.0231 4.82627L15.1331 16.3946C15.0968 16.8656 14.884 17.3056 14.5373 17.6265C14.1906 17.9474 13.7355 18.1256 13.2631 18.1254H6.73642C6.264 18.1256 5.80894 17.9474 5.46224 17.6265C5.11554 17.3056 4.90275 16.8656 4.86642 16.3946L3.97642 4.82543M16.0231 4.82543C15.0613 4.68003 14.0946 4.56968 13.1248 4.4946M3.12476 4.96293C3.40809 4.91377 3.69142 4.86793 3.97642 4.82543M3.97642 4.82543C4.9382 4.68003 5.90495 4.56968 6.87476 4.4946M13.1248 4.4946V3.73127C13.1248 2.74793 12.3664 1.92793 11.3831 1.8971C10.4611 1.86763 9.53841 1.86763 8.61642 1.8971C7.63309 1.92793 6.87476 2.74877 6.87476 3.73127V4.4946M13.1248 4.4946C11.0445 4.33383 8.95499 4.33383 6.87476 4.4946" stroke="#666666" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <a href="#" >Delete Chat</a>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    );
}

export default Header;