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
import  CustomModal from '../../component/CustomModal';

const kakaoclientId = '09b915ae69a32d00e7b3725b01cb614d';
const naverClientId = 'Dolm0U6r8etuHuK7cZOj';
const naverClientSecret = '76qmfmY97y';

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
  const [ranking, setRanking] = useState(0);
  const [score, setScore] = useState(0);

  const [duplicatePopup, setDuplicatePopup] = React.useState(false);
  const [successPopup, setSuccessPopup] = React.useState(false);
  const [failurePopup, setFailurePopup] = React.useState(false);
  const [failure2Popup, setFailure2Popup] = React.useState(false);
  const [failure3Popup, setFailure3Popup] = React.useState(false);
  const [failure4Popup, setFailure4Popup] = React.useState(false);
  const [failure5Popup, setFailure5Popup] = React.useState(false);


  const handleNickChange = (e) => setNickname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => {
    //console.log("Password:", password);
    setPassword(e.target.value);
    if(password.length>16 || password.length<8){
      setFailure3Popup(true)
    }else{
      setFailure3Popup(false)
    }
  };

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

  const closeModal = () => {
    setModalIsOpen(false);
    navigate("/"); // 팝업이 닫힐 때 프로필 페이지로 이동
  };

  const handleRegisterButtonClick = async (e) => {
    console.log('별명: ', nickname);
    console.log('이메일: ', email);
    console.log('비밀번호: ', password);
    console.log('비밀번호 확인: ', passwordConfirm);
    e.preventDefault();
    //회원가입 로직 짜기
    //필수 체크박스 체크
    //중복확인 성공 -- api
    //비밀번호=비밀번호확인
    //회원가입 성공하면 navigate("/");

    if (password === passwordConfirm && successPopup === true){
      //setEmail(email);
      if (failure3Popup){
          
      }
      else if(!ageCheck || !useCheck){
        setFailure5Popup(true)
      }
      else{
        try {
          const user = {
            email: email,
            password: password,
            nickname: nickname,
            ranking: ranking,
            score: score,
          }
          console.log(user)
          const response = await fetch('http://172.10.5.48/chat/register/', {
            method:'POST',
            body: JSON.stringify(user)
          });
          const data = await response.json()
          console.log(data.status)
          if (data.status === 200) {
            // setSuccessPopup(true);
            console.log("회원 등록 성공")
            setModalIsOpen(true)
          } else {
            //setFailurePopup(true);
            setFailure4Popup(true);
            console.log("회원 등록 실패")
          }
        } catch (error) {
          console.log(error);
          // setFailurePopup(true);
          setFailure4Popup(true);
        }
      }
      //api 보내기

      
    } else if(password !== passwordConfirm && successPopup === true){
      setFailurePopup(true);
      setFailure2Popup(false);
    } else if(password === passwordConfirm && successPopup !== true){
      setFailurePopup(false);
      setFailure2Popup(true);
    } else{
      setFailurePopup(true);
      setFailure2Popup(true);
    }
  };

  const handleKakaoButtonClick = async () => {
    const redirectUri = AuthSession.getRedirectUrl();
    const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoclientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`;
    
    const result = await AuthSession.startAsync({ authUrl });
    console.log(result);
    // 결과 처리
  }

  const duplicateHandler = async (e) => {
    try {
      const response = await fetch(`http://172.10.5.48/chat/user/idcheck/?email=${email}`);
      
      if (response.ok) {
        // Login successful, update user info and navigate to the desired page
        const data = await response.json();
        setDuplicatePopup(true);
        // status 값 200이면 가능 501이면 중복 
        if (data.status === 200){
          console.log("성공");
          setDuplicatePopup(false);
          setSuccessPopup(true);
          setFailure2Popup(false);
        }
        else if(data.status===501){
          console.log("중복");
          setDuplicatePopup(true); 
          setSuccessPopup(false); 
        }
      } else {
        console.log("실패");
        // Login failed, display failure message
        setFailurePopup(true);
        
      }
    } catch (error) {
      // Handle any network or server errors
      console.error('Error:', error);
    } // 중복 확인 성공 팝업 설정
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
                {duplicatePopup && <div style={{ color: 'red' }}>* 중복된 이메일입니다.</div>} 
                {successPopup && <div style={{ color: 'royalblue' }}>* 성공했습니다.</div>} 
              </MDBRow>
              <MDBInput value={password} onChange={handlePasswordChange} wrapperClass='mb-4' label='비밀번호 (8자리 이상 16자리 이하)' id='form' type='password'/>
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

              {failure5Popup && <div style={{ color: 'red' }}>* 필수 항목들에 체크해주세요. </div>}
              {failure4Popup && <div style={{ color: 'red' }}>* 내부적인 문제로 회원 정보 등록에 실패했습니다.</div>}
              {failure3Popup && <div style={{ color: 'red' }}>* 조건에 맞는 비밀번호를 입력해주세요.</div>}
              {failure2Popup && <div style={{ color: 'red' }}>* 이메일 중복 확인을 한 후 제출 버튼을 눌러주세요.</div>}
              {failurePopup && <div style={{ color: 'red' }}>* 비밀번호와 비밀번호 확인이 일치하지 않습니다.</div>}
              
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

      <CustomModal isOpen={modalIsOpen} closeModal={closeModal} >
        회원가입에 성공했습니다.
      </CustomModal>

    </MDBContainer>
  );
}

export default Register;