import React from 'react';
import Header from '../Components/Message/Header/Header';
import Send from '../Components/Message/Send/Send';
import Message from '../Components/Message/Message/Message';
import { chats } from '../Components/Sidebar/Sidebar';


export const chatMsg = [
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
            button:"Sunday",
            text: "i am fine"

            
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
function page({params}) {
    const {_id} = params;
  const selected = chats.filter(item => item._id == _id);
  console.log(selected);
  const message = "hello";
    return (
       
        <div className='chatbox'>
            {
                selected.map(item =>{
                    return <Header key={item._id} items={item}></Header>
                })
            }
           {/* <Header></Header> */}
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
{/*           
           {
  chatMsg.map(item => {
    return <li key={item.chatId}>{item.chatId}</li>;
  })
} */}


           {/* sending options */}
          <Send></Send>
        </div>
    );
}

export default page;