import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import './login.css';
import Modal from 'react-modal';

function Login({ getUserInfo, updateUserInfo }) {
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmChange = (e) => setPasswordConfirm(e.target.value);

  const handleLoginButtonClick = () => {
    console.log('이메일: ', email);
    console.log('비밀번호: ', password);
    console.log('비밀번호 확인: ', passwordConfirm);
    //로그인 로직 짜기
    //1. response 받아오기 2. email이 response.email과 같다면 updateUserInfo하고 navigate("/profile"); 1,2 두 경우 각각 실패 시 실패 팝업
    setModalIsOpen(true)
  };

  const handleKakaoButtonClick = () => {
    
  }

  const allBtnEvent =()=>{
    if(allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
    }else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
    } 
  };
  
  const ageBtnEvent =()=>{
    if(ageCheck === false) {
      setAgeCheck(true)
    }else {
      setAgeCheck(false)
    }
  };
  
  const useBtnEvent =()=>{
    if(useCheck === false) {
      setUseCheck(true)
    }else {
      setUseCheck(false)
    }
  };
  
  const marketingBtnEvent =()=>{
    if(marketingCheck === false) {
      setMarketingCheck(true)
    }else {
      setMarketingCheck(false)
    }
  };

  useEffect(()=>{
    if(ageCheck===true && useCheck===true && marketingCheck===true){
      setAllCheck(true)
    } else {
      setAllCheck(false)
    }
  }, [ageCheck,useCheck, marketingCheck])
  


  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" id='title' style={{color: 'hsl(218, 81%, 95%)'}}>
            Kaimind <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}} id='title'>로그인하여 시작하세요!</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass' id='form' style={{ fontSize: '18px' }}>
            <MDBCardBody className='p-5'>
              <MDBInput value={email} onChange={handleEmailChange} wrapperClass='mb-4' label='이메일' id='form' type='email'/>
              <MDBInput value={password} onChange={handlePasswordChange} wrapperClass='mb-4' label='비밀번호' id='form' type='password'/>
              <MDBInput value={passwordConfirm}  onChange={handlePasswordConfirmChange} wrapperClass='mb-4' label='비밀번호 확인' id='form' type='password'/>

              <MDBBtn onClick={handleLoginButtonClick} id='form' className='w-100 mb-4 btn btn-info' size='md' style={{ fontSize: '18px' }} >로그인</MDBBtn>

              <div className="text-center">

                <p id='form' style={{ fontSize: '18px' }}>카카오 계정으로 로그인하기</p>

                <MDBBtn tag='a' color='none' className='mx-3 mb-3' style={{ color: '#1266f1' }} onClick={handleKakaoButtonClick}>
                  <img src="/img/kakao.png" alt="Kakao" width="30" height="30" />
                </MDBBtn>
              </div>

              <div className="text-center">
                <p id='form'  style={{ fontSize: '18px' }}>처음이신가요?</p>
                <Link to="/register" id='form'  style={{ fontSize: '16px' }}>회원가입</Link>
              </div>

              
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

      <>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          This is Modal content
        </Modal>
      </>

    </MDBContainer>
  );
}

export default Login;