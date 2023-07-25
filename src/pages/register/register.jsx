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
import './register.css';

function Register() {
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleNickChange = (e) => setNickname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmChange = (e) => setPasswordConfirm(e.target.value);

  
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

  const handleRegisterButtonClick = () => {
    console.log('별명: ', nickname);
    console.log('이메일: ', email);
    console.log('비밀번호: ', password);
    console.log('비밀번호 확인: ', passwordConfirm);
    //회원가입 로직 짜기
    //필수 체크박스 체크
    //중복확인 성공 -- api
    //비밀번호=비밀번호확인
    //회원가입 성공하면 navigate("/");

    setModalIsOpen(true)
  };

  const handleKakaoButtonClick = () => {
    
  }

  const duplicateHandler = async (e) => {
    
  };


  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" id='title' style={{color: 'hsl(218, 81%, 95%)'}}>
            Kaimind입니다. <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}} id='title'>친구들과 함께 즐기세요!</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass' id='form' style={{ fontSize: '18px' }}>
            <MDBCardBody className='p-5'>
              <MDBInput value={nickname} onChange={handleNickChange} wrapperClass='mb-4' label='별명' id='form' type='text'/>
              <MDBRow>
                <MDBCol md='9'>
                  <MDBInput value={email} onChange={handleEmailChange} wrapperClass='mb-4' label='이메일' id='form' type='email'/>
                </MDBCol>
                <MDBCol md='3'>
                  <MDBBtn onClick={duplicateHandler} className='w-100 mb-4 btn btn-info' size='md' style={{ minWidth: 'fit-content', fontSize: '16px' }}>중복 체크</MDBBtn>
                </MDBCol>
              </MDBRow>
              <MDBInput value={password} onChange={handlePasswordChange} wrapperClass='mb-4' label='비밀번호' id='form' type='password'/>
              <MDBInput value={passwordConfirm} onChange={handlePasswordConfirmChange} wrapperClass='mb-4' label='비밀번호 확인' id='form' type='password'/>

              <div className='d-flex justify-content-start mb-3 '>
                <MDBCheckbox onChange={ageBtnEvent} name='flexCheck' value='' id='flexCheckDefault' label={<span>만 14세 이상입니다 <span style={{ color: 'royalblue' }}>(필수)</span></span>} />
              </div>
              <div className='d-flex justify-content-start mb-3'>
                <MDBCheckbox onChange={useBtnEvent} name='flexCheck' value='' id='flexCheckDefault' label={<span>이용약관 동의 <span style={{ color: 'royalblue' }}>(필수)</span></span>} />
              </div>
              <div className='d-flex justify-content-start mb-3'>
                <MDBCheckbox onChange={marketingBtnEvent} name='flexCheck' value='' id='flexCheckDefault' label={<span>마케팅 동의 <span style={{ color: 'darkgray' }}>(선택)</span></span>} />
              </div>

              <MDBBtn onClick={handleRegisterButtonClick} className='w-100 mb-4 btn btn-info' size='md' style={{ fontSize: '18px' }} >회원가입</MDBBtn>

              <div className="text-center">

                <p>카카오 계정으로 가입하기</p>

                <MDBBtn tag='a' color='none' className='mx-3 mb-3' style={{ color: '#1266f1' }} onClick={handleKakaoButtonClick}>
                  <img src="/img/kakao.png" alt="Kakao" width="30" height="30" />
                </MDBBtn>
              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Register;