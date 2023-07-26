import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
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
import './app.css';
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Profile from "./pages/profile/profile";
import Game from "./pages/game/game";
import EditProfile  from './pages/profile/EditProfile';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export const defaultUserInfo = {
  nickname: "또잉",
  email: "test@gmail.com",
  password: "test",
  ranking: 1,
  score: 0,
  friends: [],
};

function App() {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  const getUserInfo = () => {
    return userInfo;
  };

  const updateUserInfo = (newInfo) => {
    setUserInfo(newInfo);
  };

  return(
    <Router>
      <Routes>
        <Route
          path="/game"
          element={
            <Game
              getUserInfo={getUserInfo}
              updateUserInfo={updateUserInfo}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile 
              getUserInfo={getUserInfo}
              updateUserInfo={updateUserInfo}
            />
          }
        />
        <Route
          path="/profile-edit"
          element={
            <EditProfile 
              getUserInfo={getUserInfo}
              updateUserInfo={updateUserInfo}
            />
          }
        />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <Login getUserInfo={getUserInfo} updateUserInfo={updateUserInfo} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;