import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBTextArea,
  MDBBtn,
  MDBForm
} from "mdb-react-ui-kit";
import useWebSocket from 'react-use-websocket';

import "./Chat.css"

const SOCKET_URL = 'ws://172.10.5.48/ws/chat/lobby/';

const Chat = () => {
  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([]);
  
  const { lastMessage, sendJsonMessage } = useWebSocket(SOCKET_URL);
  
  useEffect(() => {
    if (lastMessage) {
      const data = JSON.parse(lastMessage.data);
      setMessages((prevMessages) => [...prevMessages, data]);
    }
  }, [lastMessage]);

  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSendButtonClick = async (e) => {
    if (message.trim() !== '') {
      sendJsonMessage({ message: message });
      sendUserName({userName: "me"});
      setMessage('');
    }
  }

  const getAvatarUrl = (index) => {
    return index % 2 === 0
      ? "/img/character1.png"
      : "/img/character2.png";
  };

  const getUserName = (index) => {
    return index % 2 === 0 ? "장작" : "나무";
  };
  
  return (
    <MDBCard id="chat1" className="ms-auto" style={{ borderRadius: "15px", height: "820px", fontSize:"20px"}}>
      <MDBCardHeader
        className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
        style={{
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      >
        <p id="form" className="mb-0 fw-bold">채팅창</p>
      </MDBCardHeader>

      <MDBCardBody style={{ fontSize: '24px', overflowY: 'scroll' }}>
        {messages.map((item, index) => (
          <div
            key={index}
            className={`d-flex flex-row ${
              index % 2 === 0 ? "justify-content-start" : "justify-content-end"
            } mb-4`}
          >
            {index % 2 === 0 && (
              <img
                src={getAvatarUrl(index)}
                alt="avatar"
                style={{ width: "45px", height: "100%" }}
              />
            )}
            <div
              className="p-3 ms-3"
              style={{
                borderRadius: "15px",
                backgroundColor:
                  index % 2 === 0 ? "rgba(57, 192, 237,.2)" : "#fbfbfb",
              }}
            >
              <p className="small mb-0">{item.message}</p>
            </div>
            {index % 2 !== 0 && (
              <img
                src={getAvatarUrl(index)}
                alt="avatar"
                style={{ width: "45px", height: "100%" }}
              />
            )}
          </div>
        ))}
        
        <MDBRow className="align-items-center">
          <MDBCol md="9">
            <div class="form-outline">
              <input value={message} onChange={handleMessageChange} type="text" id="typeText" class="form-control" style={{ borderRadius: '15px', border: '1px solid #ced4da', paddingLeft: '10px',  fontSize: '25px', }}/>
              <label class="form-label" for="typeText" style={{ fontSize: '20px' }}>입력...</label>
            </div>
          </MDBCol>
          
          <MDBCol md="3" className="d-flex justify-content-end">
            <MDBBtn
              id='form'
              className='mt-4 w-100 mb-4 btn btn-info ml-2' 
              size='md'
              style={{ minWidth: 'fit-content', fontSize: '20px', marginLeft: '0.5rem' }}
              onClick={handleSendButtonClick}
            >
              ↵
            </MDBBtn>
          </MDBCol>
        </MDBRow>

      </MDBCardBody>

    </MDBCard>
  );
};

export default Chat;
