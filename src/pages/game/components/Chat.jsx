import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
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

import "./Chat.css"

const Chat = () => {
  return (
    <MDBCard id="chat1" className="ms-auto" style={{ borderRadius: "15px", height: "710px", fontSize:"20px"}}>
      <MDBCardHeader
        className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
        style={{
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
        }}
      >
        <p id="form" className="mb-0 fw-bold">채팅창</p>
      </MDBCardHeader>

      <MDBCardBody style={{ fontSize: '24px' }}>
        <div className="d-flex flex-row justify-content-start mb-4 ">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
          <div
            className="p-3 ms-3"
            style={{
              borderRadius: "15px",
              backgroundColor: "rgba(57, 192, 237,.2)",
            }}
          >
            <p className="small mb-0">
              장작
            </p>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-end mb-4">
          <div
            className="p-3 me-3 border"
            style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}
          >
            <p className="small mb-0">
              나무
            </p>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
        </div>

        <div className="d-flex flex-row justify-content-start mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
          <div className="ms-3" style={{ borderRadius: "15px" }}>
            <div className="bg-image">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp"
                style={{ borderRadius: "15px" }}
                alt="video"
              />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-start mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
          <div
            className="p-3 ms-3"
            style={{
              borderRadius: "15px",
              backgroundColor: "rgba(57, 192, 237,.2)",
            }}
          >
            <p className="small mb-0">...</p>
          </div>
        </div>


        <MDBRow className="align-items-center">
          {/* Textarea */}
          <MDBCol md="9">
            <div class="form-outline">
              <input type="text" id="typeText" class="form-control" style={{ borderRadius: '15px', border: '1px solid #ced4da', paddingLeft: '10px',  fontSize: '25px', }}/>
              <label class="form-label" for="typeText" style={{ fontSize: '20px' }}>입력...</label>
            </div>
          </MDBCol>
          
          {/* Send Button */}
          <MDBCol md="3" className="d-flex justify-content-end">
            <MDBBtn
              id='form'
              className='mt-4 w-100 mb-4 btn btn-info ml-2' // Add ms-2 class for left margin
              size='md'
              style={{ minWidth: 'fit-content', fontSize: '20px', marginLeft: '0.5rem' }}
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
