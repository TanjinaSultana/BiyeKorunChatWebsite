import React from 'react';
import Header from '../Message/Header/Header';
import Send from '../Message/Send/Send';
import Message from '../Message/Message/Message';

function ChatBox() {
    const chatMsg = [
        {
            
            _id : 1,
            image: "https://i.ibb.co/nzPW0zB/user4.png",
            name: "AR",
            msg1: "Hi",
            span: "@All",
            msg2: "How are you?",
            time: "10:30 AM",
            btn: "30-10-2023",
            text: "Hi @All \n How are you?",
            sender: {
                _id : "A",
                button:"Sunday"

                
            },
            chatId:1
        },
        {
            
            _id : 2,
            image: "https://i.ibb.co/427n1gB/user9.png",
            name: "AR",
            msg1: "Hi",
            span: "@AR",
            msg2: "I’m fine and you?",
            msg3: "If you want, i want to be your friends.",
            time: "10:30 AM",
            
            sender: {
                id : "B",
                msg: "I’m so sorry for my late reply, and yes, i want to your friend.",
                Time: "10:30 AM",
                button:"Yesterday"

                
            },
            chatId: 2
        },

    ]
    return (
        <div className='chatbox'>
           <Header></Header>
           <hr className='line'></hr>
           {/* button  box */}
           <div className='btn'>
            <button className='button'>
            30-10-2023
            </button>
           </div>
           {/* message */}
           {
  chatMsg.map(item => {
    return <Message key={item._id} items={item}></Message>;
  })
}


           {/* sending options */}
          <Send></Send>
        </div>
    );
}

export default ChatBox;