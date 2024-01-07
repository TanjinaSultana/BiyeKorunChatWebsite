import React from 'react';
import Image from 'next/image';

function Message({ items }) {
    console.log(items);
    const { _id, image, name, msg1, span, msg2, msg3, time, sender } = items;
    const { button, _id: userId, msg, Time } = sender || {};

    return (
        <div>
            {
                msg3 ? <>
                    <div className='msgHeader'>
                        <Image src={image} alt='userImage' className='img' width={36} height={36}></Image>

                        <div>
                            <h3 className='heading'>{name}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="232" height="73" viewBox="0 0 232 73" fill="none">
                                <path d="M0 10C0 4.47715 4.47715 0 10 0H220C226.627 0 232 5.37258 232 12V61C232 67.6274 226.627 73 220 73H20C8.95431 73 0 64.0457 0 53V10Z" fill="white" className='svgBox' />
                            </svg>
                            <div className='msgBox'>
                                <p className='msg'>{msg1} <span className='msgspan'>{span}</span></p>
                                <div className='inbox'>

                                    <p >{msg2}</p>

                                    <p className='msgTime'>{time}</p>
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="366" height="58" viewBox="0 0 366 58" fill="none">
                                    <path d="M0 4C0 1.79086 1.79086 0 4 0H362C364.209 0 366 1.79086 366 4V54C366 56.2091 364.209 58 362 58H13C5.8203 58 0 52.1797 0 45V4Z" fill="white" />
                                </svg>
                                <p className='message3'>{msg3}</p>
                                <p className='time'>{time}</p>
                            </div>
                            {/* button */}
                            <div className='TimeButton btn'>
                                <button className='button'>
                                    {button}
                                </button>
                            </div>
                            {/* sender message */}
                            <div className='sender'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="535" height="59" viewBox="0 0 535 59" fill="none">
                                    <path d="M0 4C0 1.79086 1.79086 0 4 0H531C533.209 0 535 1.79086 535 4V55C535 57.2091 533.209 59 531 59H13C5.82031 59 0 53.1797 0 46V4Z" fill="#0A2E22" fillOpacity="0.9" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </> : <>
                    <div className='msgHeader'>
                        <Image src={image} alt='userImage' className='img' width={36} height={36}></Image>

                        <div>
                            <h3 className='heading'>{name}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="232" height="73" viewBox="0 0 232 73" fill="none">
                                <path d="M0 10C0 4.47715 4.47715 0 10 0H220C226.627 0 232 5.37258 232 12V61C232 67.6274 226.627 73 220 73H20C8.95431 73 0 64.0457 0 53V10Z" fill="white" className='svgBox' />
                            </svg>
                            <div className='msgBox'>
                                <p className='msg'>{msg1} <span className='msgspan'>{span}</span></p>
                                <div className='inbox'>

                                    <p >{msg2}</p>

                                    <p className='msgTime'>{time}</p>
                                </div>
                            </div>

                            {/* button */}
                            <div className='TimeButton btn'>
                                <button className='button'>
                                    {button}
                                </button>
                            </div>
                            {/* sender message */}
                            <div className='sender'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="198" height="51" viewBox="0 0 198 51" fill="none">
                                    <path d="M0 4C0 1.79086 1.79086 0 4 0H194C196.209 0 198 1.79086 198 4V47C198 49.2091 196.209 51 194 51H13C5.82029 51 0 45.1797 0 38V4Z" fill="#0A2E22" fillOpacity="0.9" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Message;