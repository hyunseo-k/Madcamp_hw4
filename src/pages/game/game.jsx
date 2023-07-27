import React, { useEffect, useRef, useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBTextArea,
  MDBBtn
} from "mdb-react-ui-kit";
import "./game.css"
import Drawboard from "./components/Drawboard";
import Chat from "./components/Chat";
import Info from "./components/Info";
import InfoNot from "./components/InfoNot";
import DrawboardNot from "./components/DrawboardNot";
import HtmlComponent from './HtmlComponent';
import io from 'socket.io-client';


export default function Game() {

  const [websocket, setWebsocket] = useState(null);

  useEffect(() => {
    // WebSocket 연결
    const newWebsocket = io('ws://172.10.5.48/ws'); // 여기에 Django Channels WebSocket URL을 넣어주세요.

    newWebsocket.on('connect', () => {
      console.log('WebSocket connected');
    });

    newWebsocket.on('message', (data) => {
      // 받은 메시지 데이터를 처리하는 로직 추가
      console.log('Received data:', data);
    });

    setWebsocket(newWebsocket);

    return () => {
      // 컴포넌트 언마운트 시 WebSocket 연결 종료
      newWebsocket.disconnect();
    };
  }, []);

  // 그림 데이터를 WebSocket을 통해 서버로 보내는 함수
  const sendDrawData = (data) => {
    if (websocket) {
      websocket.send(JSON.stringify(data));
    }
  };

  return (
    <MDBContainer fluid className="py-5 background-radial-gradient overflow-hidden">
      <MDBRow className="d-flex justify-content-center align-items-top" id="form">
        <MDBCol className="bottom-align-col" md="3" lg="3" xl="3">
          <Info />
        </MDBCol>
        <MDBCol md="6" lg="6" xl="6">
        <MDBCard id="chat1" className="ms-auto" style={{ borderRadius: "15px", width:"100%", fontSize: '20px' }}>
    <MDBCardHeader
      className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
      style={{
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
      }}
    >
      <p id="form" className="mb-0 fw-bold" style={{ fontSize: '23px' }}>현서 님이 그림을 그리고 있습니다!</p>
    </MDBCardHeader>
    <MDBCardBody className="canvas-container">
      <span class="badge rounded-pill badge-primary mb-2" style={{ width: '80px', fontSize: '20px' }}>제시어</span>
      
      <div>
          <iframe
            src="http://172.10.5.48/drawboard/draw/lobby/"
            sandbox="allow-same-origin allow-scripts"
            width="100%"
            height="650px"
            style={{border: 'none'}}
            title="external-drawboard"
          ></iframe>
        </div>
    </MDBCardBody>
  </MDBCard>
  
        
        </MDBCol>
        <MDBCol md="3" lg="3" xl="3">
          <Chat />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}