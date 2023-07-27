import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import './Wait.css'
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Wait({ getUserInfo, updateUserInfo }) {
  const navigate = useNavigate();

  return (
    <div className="container-fluid gradient-custom-2" style={{ backgroundColor: '#9de2ff', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MDBContainer fluid className="container-fluid" id='form2' style={{ fontSize: '30px', color: 'white' }}>
        <MDBCardText>게임 상대를 찾는 중입니다...</MDBCardText>
      </MDBContainer>
    </div>
  );
}
