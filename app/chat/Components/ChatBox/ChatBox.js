import React from 'react';
import Header from '../Message/Header/Header';
import Send from '../Message/Send/Send';
import Message from '../Message/Message/Message';

function ChatBox() {
    return (
        <div className='chatbox'>
           <Header></Header>
           <hr className='line'></hr>
           {/* box */}
           <div className='btn'>
            <button className='button'>
            30-10-2023
            </button>
           </div>
           {/* message */}
           <Message></Message>

           {/* sending options */}
          <Send></Send>
        </div>
    );
}

export default ChatBox;