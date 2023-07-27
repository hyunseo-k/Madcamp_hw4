import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import './profile.css'
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EditProfile from './EditProfile';
import Game from '../game/game';
import { userAPI } from "../../apis/userAPI";
import { defaultUserInfo } from "../../App";


export default function Profile({ getUserInfo, updateUserInfo }) {
  const navigate = useNavigate();
  const [tempUserInfo, setTempUserInfo] = useState(defaultUserInfo);
  
  const handleGameClick = (e) => {
    navigate("/game");
  };

  const handleEditClick = () => {
    navigate("/profile-edit"); // Navigate to the EditProfile component
  };

  useEffect(() => {
    let tempUserInfo = getUserInfo();
    setTempUserInfo(tempUserInfo);
    console.log("userinfo", tempUserInfo);
  }, [tempUserInfo]); // tempUserInfo 의존성을 추가합니다.


  return (
    <div className="container-fluid gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer fluid className="container-fluid" id='form' style={{ fontSize: '20px' }}>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard className="w-100">
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src="/img/character2.png"
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  {/* <MDBBtn onClick={handleEditClick} className="btn btn-secondary btn-rounded"  data-mdb-ripple-color="dark" style={{ overflow: 'visible', fontSize: '16px'}}>
                    수정하기
                  </MDBBtn> */}
                </div>
                <div className="ms-3" style={{ marginTop: '120px' }}>
                  <MDBTypography id='form_t' tag="h5" style={{ fontSize: '25px' }}>{tempUserInfo.nickname}</MDBTypography>
                  <MDBCardText>{tempUserInfo.ranking}</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end  text-center py-1">
                  <MDBBtn className="me-3 btn btn-secondary btn-rounded justify-content-center" data-mdb-ripple-color="dark" style={{ overflow: 'visible', fontSize: '18px'}}>
                    친구 목록
                  </MDBBtn>
                  <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Friends</MDBCardText>
                  </div>
                  
                </div>
              </div>
              
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3" id='form_t'>
                      <MDBCardText>별명</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{tempUserInfo.nickname}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3" id='form_t'>
                      <MDBCardText>이메일</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{tempUserInfo.email}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3" id='form_t'>
                      <MDBCardText>랭킹</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{tempUserInfo.ranking}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3" id='form_t'>
                      <MDBCardText>누적 스코어</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{tempUserInfo.score}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  
                </MDBCardBody>
              </MDBCard>
            
            </MDBCard>
          </MDBCol>
          
        </MDBRow>
        
        </MDBContainer>
        <div className="d-flex justify-content-center" id='form' >
          <button type="button" className="btn btn-info btn-rounded mt-3" onClick={handleGameClick} style={{ fontSize: '23px' }}>게임 시작하기</button>
        </div>

    </div>
  );
}