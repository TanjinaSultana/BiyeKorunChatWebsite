import React from 'react';

function UserList({ items }) {
    const { _id, image, img_bg, name, HexCode, videoText, time, message, member, Text, bg } = items;
    return (
        <div className='userlist'>
            {
                bg ?
                    <div >
                        <div className="background">

                            <div className='userDetails userdetail'>
                                <div className='image'>
                                    <img src={image}></img>
                                </div>
                                <div >

                                    <h2 className='userName'>{name} <span className='hexCode'>{HexCode}</span></h2>
                                    <p className='userMember'>{member}</p>
                                    <p className='userVideo'>{videoText}</p>
                                    <p className='userText'>{Text}</p>
                                </div>
                            </div>
                            <div className='userTime'>
                                <p className='time'>{time}</p>
                                <div className='msgSvg'>

                                    {
                                        message ? (<>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <circle cx="9" cy="9" r="8.5" fill="#F42A41" stroke="white" className='svg' />
                                            </svg>
                                            <p className='message'>{message}</p>
                                        </>

                                        ) : <>

                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div> : <>
                        <div  >

                            <div className='userDetails'>
                                <div className='images'>
                                    <img src={image}></img>
                                </div>
                                <div >

                                    <h2 className='userName'>{name} <span className='hexCode'>{HexCode}</span></h2>
                                    <p className='userMember'>{member}</p>
                                    <p className='userVideo'>{videoText}</p>
                                    <p className='userText'>{Text}</p>
                                </div>
                            </div>
                            <div className='userTime'>
                                <p className='time'>{time}</p>
                                <div className='msgSvg'>

                                    {
                                        message ? (<>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <circle cx="9" cy="9" r="8.5" fill="#F42A41" stroke="white" className='svg' />
                                            </svg>
                                            <p className='message'>{message}</p>
                                        </>

                                        ) : <>

                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
}

export default UserList;