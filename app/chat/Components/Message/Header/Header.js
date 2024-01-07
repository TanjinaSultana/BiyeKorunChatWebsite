import Image from 'next/image';
import React from 'react';
import img from '@/public/image/user4.png'

function Header({items}) {
    console.log(items);
    const {_id,image,img_bg,name,HexCode} = items;
    return (
        <div className='header'>
            <div className='user'>
                <div className='list'>

                    <Image src={image} alt='userImage' className='img'  width={36} height={36}></Image>
                    <div>
                        <div className='name'>

                            <h2 className='userName'>{name}</h2>
                            <p className='hexcode'>{HexCode}</p>
                        </div>
                        <p className='online'>Online</p>
                    </div>
                </div>


            </div>
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
  <path d="M13.125 8.75L17.0583 4.81667C17.1457 4.72937 17.2571 4.66993 17.3782 4.64586C17.4994 4.62179 17.625 4.63417 17.7391 4.68143C17.8532 4.72869 17.9508 4.80871 18.0195 4.91139C18.0882 5.01407 18.1249 5.1348 18.125 5.25833V14.7417C18.1249 14.8652 18.0882 14.9859 18.0195 15.0886C17.9508 15.1913 17.8532 15.2713 17.7391 15.3186C17.625 15.3658 17.4994 15.3782 17.3782 15.3541C17.2571 15.3301 17.1457 15.2706 17.0583 15.1833L13.125 11.25M3.75 15.625H11.25C11.7473 15.625 12.2242 15.4275 12.5758 15.0758C12.9275 14.7242 13.125 14.2473 13.125 13.75V6.25C13.125 5.75272 12.9275 5.27581 12.5758 4.92417C12.2242 4.57254 11.7473 4.375 11.25 4.375H3.75C3.25272 4.375 2.77581 4.57254 2.42417 4.92417C2.07254 5.27581 1.875 5.75272 1.875 6.25V13.75C1.875 14.2473 2.07254 14.7242 2.42417 15.0758C2.77581 15.4275 3.25272 15.625 3.75 15.625V15.625Z" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
                </div>
                {/* delete */}
                <div className='icons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='svgicon'>
  <path d="M12.2833 7.50044L11.995 15.0004M8.005 15.0004L7.71667 7.50044M16.0233 4.82543C16.3083 4.86877 16.5917 4.9146 16.875 4.96377M16.0233 4.82627L15.1333 16.3946C15.097 16.8656 14.8842 17.3056 14.5375 17.6265C14.1908 17.9474 13.7358 18.1256 13.2633 18.1254H6.73667C6.26425 18.1256 5.80919 17.9474 5.46248 17.6265C5.11578 17.3056 4.90299 16.8656 4.86667 16.3946L3.97667 4.82543M16.0233 4.82543C15.0616 4.68003 14.0948 4.56968 13.125 4.4946M3.125 4.96293C3.40833 4.91377 3.69167 4.86793 3.97667 4.82543M3.97667 4.82543C4.93844 4.68003 5.9052 4.56968 6.875 4.4946M13.125 4.4946V3.73127C13.125 2.74793 12.3667 1.92793 11.3833 1.8971C10.4613 1.86763 9.53865 1.86763 8.61667 1.8971C7.63333 1.92793 6.875 2.74877 6.875 3.73127V4.4946M13.125 4.4946C11.0448 4.33383 8.95523 4.33383 6.875 4.4946" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </div>

                {/* more */}
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <rect width="38" height="38" rx="5" fill="black" fillOpacity="0.05" />
                    <circle cx="19" cy="12" r="2" fill="black" fillOpacity="0.6" />
                    <circle cx="19" cy="19" r="2" fill="black" fillOpacity="0.6" />
                    <circle cx="19" cy="26" r="2" fill="black" fillOpacity="0.6" />
                </svg>
            </div>


            </div>
          


        </div>
    );
}

export default Header;