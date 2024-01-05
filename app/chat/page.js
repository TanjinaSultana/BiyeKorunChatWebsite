import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import ChatBox from './Components/ChatBox/ChatBox';

function page() {
    return (
        <div id='chat'>
            <Sidebar></Sidebar>
            <ChatBox></ChatBox>
        </div>
    );
}

export default page;